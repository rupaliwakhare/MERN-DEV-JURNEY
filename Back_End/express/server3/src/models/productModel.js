import mongoose from "mongoose";

const productShema = new mongoose.Schema({
    name:{type:String},
    price:{type:Number}
})

export default productShema;