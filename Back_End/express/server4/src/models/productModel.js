import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  mobile: {
    type: String,
    required: true,
    unique:true
  },
});

const productModel = mongoose.model("product", productSchema);
export default productModel;
