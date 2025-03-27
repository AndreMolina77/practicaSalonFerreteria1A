import employeeModel from "../models/employee.js";
import bcryptjs from "bcryptjs" //Encriptar
import jsonwebtoken from "jsonwebtoken" //Token
import { config } from "../config.js";

//Creemos un array de funciones 

const registerEmployeeController = {};

registerEmployeeController.register = async (req, res) => {
    //pedimos los campos que vamos a registrar
    const {name, lastname, email, address, password, hireDate, telephone, dui, isVerified, isssnumber} = req.body;

    //Utilizar trycatch
    try {
        //Verificar si el empleado ya existe
        const employeeExists = await employeeModel.findOne({email})
        if (employeeExists) {
            return res.json({message: "Employee already exists"})
        }

        //Encriptar la contraseña
        const passwordHash = await bcryptjs.hash(password, 10) //el 10 significa salth with pepper, se ejecuta 10 veces 

        //Guardamos el empleado en la base de datos
        const newEmployee = new employeeModel({
            //pedimos los campos que vamos a registrar
            name, lastname, email, address, password, hireDate, telephone, dui, isVerified, isssnumber
        })

        //TOKEN
        jsonwebtoken.sign(
            //1- Que voy a guardar
            {id: newEmployee._id},
            //2- secreto
            config.JWT.secret,
            //3- Cuando expira 
            {expiresIn: config.JWT.expires},
            //4- Función flecha 
            (error, token) => {
                if(error) console.log("error")

                    res.cookie("authToken", token)
                    res.json({message: "Employee registered"})
            }
        )
        await newEmployee.save();
    } catch (error) {
        console.log("error" + error)
        res.json({message: "sign up error"})
    }
}

export default registerEmployeeController;