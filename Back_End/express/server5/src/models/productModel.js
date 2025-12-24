import mongoose from "mongoose";

const productScheme = new mongoose.Schema({
    title:String,
    price:Number,
    description:String,
})

const productModel = mongoose.model("product",productScheme)

export default productModel;