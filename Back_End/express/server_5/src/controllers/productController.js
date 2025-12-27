// productController.js
import productModel from "../models/productModel.js";

const getProduct = async (req, res) => {
  try {
    const product = await productModel.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.status(201).json({ message: "Product added", product });
  } catch (error) {
    res.status(500).send(error);
  }
};


const updateProduct = async(req,res)=>{
    try {
        const id = req.params.id;
        const product = await productModel.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"Product updated",product})
    } catch (error) {
        res.status(500).send({message:"Error", error:error.error });
    }
}

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productModel.findByIdAndDelete(id, req.body);
    res.status(200).json({ message: "Product deleted", product });
  } catch (error) {
    res.status(500).json({ sucess: false, message: "error" });
  }
};
export { getProduct, postProduct, updateProduct,deleteProduct };
