import jsonwebtoken from "jsonwebtoken";
import brcryptjs from "bcryptjs";

import clientsModel from "../models/customers.js"
import employeeModel from "../models/employee.js";

import { sendEmail, HTMLRecoveryEmail } from "../utils/mailRecoveryPassword.js";
import { config } from "../config.js";

//1- Array de funciones 
const recoveryPasswordController = {};

recoveryPasswordController.requestCode = async (req, res) => {
    const { email } = req.body;
        
    try {
        let userFound;
        let userType;

        //Verificamos que el usuario exista
        userFound = await clientsModel.findOne({email})
        if(userFound){
            userType = "client"
        }
        else{        
            if(userFound){
                userType = "employee"
            }
        }
        
        if(!userFound){
            return res.json({ message: "User not found"})
        }

        //Generar un código aleatorio (el que vamos a mandar)

        const code = Math.floor(1000 + Math.random() * 90000).toString //Math es una libreria ya predefinida.

        const token = jsonwebtoken.sign(
            //1- Qué voy a guardar=
            {email, code, userType, verified: false},
            //2- secret key
            config.JWT.secret, //El token se encripta en el secreto porque guardamos todos los datos anteriores que son privados
            //3-¿Cuando expira?
            {expiresIn: "20m"}
        )

        //Guardamos el token en una cookie
        res.cookie("tokenRecoveryCode", token, {maxAge: 20*60*1000}) //maxage es para cuando se vence la cookie

        //ULTIMO PASO - Enviar el correo
        await sendEmail(
            email,
            "Password recovery code", //asunto
            `Your verification code is: ${code}`, //cuerpo
            HTMLRecoveryEmail(code)
        )
        res.json({message: "Verification code sent"})
    } catch (error) {
        console.log("error" + error);
    }
}

export default recoveryPasswordController;