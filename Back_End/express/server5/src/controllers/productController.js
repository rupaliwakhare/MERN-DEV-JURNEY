import productModel from "../models/productModel.js";

// create product

const addProduct = async(req,res)=>{
    const {title,price,description} = req.body;
    const product = await productModel.create({title,price,description})
    res.send("Prodect Added", product)
}
 export default addProduct;

 