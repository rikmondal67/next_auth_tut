import mongoose, { Schema } from "mongoose";
const userschmea = new Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
});

export const  userSchema =mongoose.model('user',userschmea);