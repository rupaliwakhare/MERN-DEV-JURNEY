import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password: String,
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})