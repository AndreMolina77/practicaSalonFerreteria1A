import bcrypt  from "bcryptjs";
import  jsonwebtoken from "jsonwebtoken";
import clientModel from "../models/customers.js"
import employeeModel from "../models/employee.js";
import {config} from "../config.js"

//Array de funciones

const loginController = {};

loginController.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        let userFound; // Guardar el usuario encontrado
        let userType; // Guardar el tipo de usuario

        if (email === config.admin.email && password === config.admin.password) {
            userType = "admin";
            userFound = {_id: "admin"};

        }else{
            //Empleado
            userFound = await employeeModel.findOne({email});
            userType = "employee";

            //Cliente 
            if(!userFound){
                userFound = await clientModel.findOne({email});
                userType = "client"
            }
        }

        //Si no encuentra el usuario en ningun lado
        if(!userFound){
            return res.json({message: "User not found"})
        }

        // Desencriptar la contraseña si no es admin
        if(userType !== "admin"){
            const isMatching = bcryptjs.compare(password, userFound.password)
            if(!isMatching){
                res.json({message: "Invalid password"})
            }
        }

        //TOKEN
        jsonwebtoken.sign(
            {id: userFound._id, userType},
            //2- secreto
            config.JWT.secret,
            //3- ¿Cuándo expira?
            {expiresIn: config.JWT.expires},
            //4- Función flecha
            (error, token) => {
                if(error) console.log("error"+error)
                    res.cookie("authToken", token)
                res.json({message: "login successful"})
            }
        )
        
    } catch (error) {
        console.log("error"+error)
    }
}

export default loginController;