import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:String,
   price:Number,
   description:String
})

const productModel = mongoose.model("Product",productSchema)

export default productModel;