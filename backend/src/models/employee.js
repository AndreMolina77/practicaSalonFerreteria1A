/*
    Campos:
       "name": "",
       "lastName": "",
       "birthday": "",
       "email": "",
       "address": "",
       "password": "",
       "hireDate": "",
       "telephone": "",
       "dui": "",
       "isVerified": "",
       "isssnumber": ""
*/
import { Schema, model } from "mongoose";

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },

    lastName: {
      type: String,
      require: true
    },

    birthday: {
      type: Date,
      require: true,
      min: 0,
    },

    email: {
      type: String,
    },

    address: {
      type: String,
      require: true
    },

    password: {
      type: String,
      require: true,
    },
    hireDate: {
      type: String,
      require: true
    },

    telephone: {
      type: String,
      require: true,
    },

    dui: {
      type: String,
      require: true,
    },
    isVerified: {
      type: Boolean,
      require: true
    },
    isssnumber: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("employee", employeeSchema);
