/*
   Coleccion: Sales
   product
   category
   customer
   total 
   date
*/

import { timeStamp } from "console";
import { model, Schema} from "mongoose";
import { type } from "os";

const salesSchema = new Schema(
    {
        product:{
            type: String,
            require: true
        },
        category:{
            type: String,
            require: true
        },
        customer:{
            type: String,
            require: true
        },
        total:{
            type: Number,
            require: true
        },
        date:{
            type: Date,
            require: true
        }
    },
    {
        timestamps: true,
        strict: false
    }
)

export default salesModel;