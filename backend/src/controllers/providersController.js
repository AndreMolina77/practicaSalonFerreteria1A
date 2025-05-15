import providersModel from "../models/providers.js";
import {v2 as cloudinary} from "cloudinary"

import { config } from "../config.js";

//1- En el controlador, siemper se tiene que condi
gurar 
// Cloudinary primero

cloudinary.config({
    cloud_name: config.cloudinary.cloud_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinary_api_secret,
});

//Array de funciones vacío
const providersController = [];

//SELECT 
providersController.getAllProviders = async (req, res) => {
    const providers = await providersModel.find()
    res.json(providers)
}

//INSERT
providersController.insertProviders = async (req, res) => {
    const { name, telephone } = req.body;
    let imageURL = "";

    //Subir la imagen a cloudinary
    if(req.file){
        const result = await cloudinary.uploader.upload(
            req.file.path,
            {
                folder: "public",
                allowed_formats: ["jpg", "png", "jpeg"]
            }

        )
        imageURL = result.secure_url
    }

    //Guardas el registro en la base de datos
    const newProvider = new providersModel({name, telephone, image: imageURL})
    newProvider.save()

    res.json({message: "Provider savedS"})
}