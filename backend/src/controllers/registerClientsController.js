import nodemailer from "nodemailer"; //Enviar correos
import crypto from "crypto"; //Generar código aleatorio
import jsonwebtoken from "jsonwebtoken"; //Token
import bcryptjs from "bcryptjs"; //Encriptar la contraseña
import clientsModel from "../models/customers.js"
import { config } from "../config.js";

const registerClientsController = {}
//Creo un array de funciones 
registerClientsController.register = async (req, res) => {
   const {
    name,
    lastname,
    birthday,
    email,
    password,
    telephone,
    dui,
    isVerified
} = req.body;

try {
    //1- Verificar si el cliente ya existe.
    const existsClient = await clientsModel.findOne({email})
    if(existsClient){
        return res.json({message: "Client already exists"})
    }
    
    //2- Encriptar contraseña
    const passwordHash = await bcryptjs.hash(password, 10)
     //3- Guardamos el nuevo cliente
     const newClient = new clientsModel({
        name,
    lastname,
    birthday,
    email,
    password: passwordHash,
    telephone,
    dui: dui || null,
    isVerified: isVerified || false
     })

     await newClient.save();

     const verificationCode = crypto.randomBytes(3).toString("hex")

     const tokenCode = jsonwebtoken.sign(
        {email, verificationCode},
        config.JWT.secret,
        {expiresIn: "2h"}
    )

    res.cookie("verificationToken", tokenCode), {maxAge: 2 * 60 * 60 * 100}

    //Enviar correo
    //1- Transporter => ¿Quién lo envía?
    const Transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            user: config.emailUser.user_email,
            pass: config.emailUser.user_pass
        }
    })

    //2- mailOptions => Quién lo recibe
    const mailOptions = {
        format: config.email.user_email,
        to: email,
        subject: "Verificación de la cuenta",
        html: `<div>
        <p>¡Hola!</p>
        <p>Gracias por registrarte en nuestra plataforma. Para verificar tu cuenta y activar todas las funciones, utiliza el siguiente código:</p>
        <div style="background-color: #e6f7ff; color: #3498db; padding: 15px 25px; border-radius: 5px; font-size: 1.2em; font-weight: bold; margin-bottom: 25px; text-align: center; letter-spacing: 5px;">
            [CODIGO_DE_VERIFICACION]
        </div>
        <p style="color: #777; font-size: 0.9em; margin-bottom: 20px;">Por favor, introduce este código en la página de verificación dentro de los próximos minutos.</p>
        <div style="text-align: center; margin-bottom: 20px;">
            <a href="[ENLACE_DE_VERIFICACION]" style="background-color: #3498db; color: white; border: none; border-radius: 5px; padding: 12px 25px; font-size: 16px; cursor: pointer; text-decoration: none; transition: background-color 0.3s ease; display: inline-block;">Verificar Cuenta</a>
        </div>
        <p style="color: #777; font-size: 0.9em; margin-bottom: 20px;">Si no solicitaste esta verificación, puedes ignorar este correo electrónico.</p>
        <div style="color: #999; font-size: 0.8em; text-align: center; margin-top: 30px;">
            Este es un correo electrónico automático. Por favor, no respondas a este mensaje.
        </div>
    </div>`

    }

    //3- Enviar el correo
    Transporter.sendMail(mailOptions, (error, info) => {
        if(error) console.log("error"+error)
            res.json({message: "Email sent" + info})
    })

    res.json({message: "Client registered, please verify your email"})
} catch (error) {
    console.log("error"+error)
    res.json({message: "Error" + error})

}
}

//////////////////////////// Verificar codigo //////////////////////////////////////
registerClientsController.verifyCodeEmail = async (req, res) => {
    const {verificationCodeRequest} = req.body;

    //1- Obtener el token
    const token = req.cookies.verificationToken

    //2- Verificar y decodificar el token
    const decoded = jsonwebtoken.verify(token, config.JWT.secret)
    const {email, verificationCode: storedCode /*stored code es un alias que le coloco yo */} = decoded

    //3- Comparar los códigos
    if(verificationCodeRequest !== storedCode){
        requestAnimationFrame.res.json({message: "Invalid code"})
    }

    //SI es igual el código, entonces, colocalmos el campo
    //"isVerified" me trie
    const client = await clientsModel.findOne({ email })
    client.isVerified= true;
    await client.save();

    res.clearCookie("verificationToken");

    res.json({ message: "Email verified successfully"})

} 

export default registerClientsController;