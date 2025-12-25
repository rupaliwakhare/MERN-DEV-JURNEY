import productModel from "../models/productModel.js";

// create product

const createProduct = async (req, res) => {
  try {
    const { name, price, mobile } = req.body;
    const product = await productModel.create({ name, price, mobile });
    res.status(201).json({ success: true, message: "product Added", product });
  } catch (error) {
    res.status(500).json({success:false,message:"Error",error:error.message})
  }
};

const getData = async (req, res) => {
    try {
        let product = await productModel.find();
        res.status(200).json({ success: true, message: "get all product", product});
    } catch (error) {
        res.status(500).json({ success: false, message: "Error", error:error.message });
    }
  
};

const updateProduct = async (req, res) => {
 try {
     const id = req.params.id;
     const product = await productModel.findByIdAndUpdate(id, req.body, {
       new: true,
     });

     if(!product){
        return res.status(404).json({success:false, message:"Product Not Found"})
     }
     res.status(200).json({ success: true, message: "Product Updated", product });
 } catch (error) {
    res.status(500).json({success:false,message:"Error", error:error.message})
 }
};

let deleteProduct = async (req, res) => {
    try {
         const id = req.params.id;
  const products = await productModel.findByIdAndDelete(id);

  res.status(200).json({ message: "Product Deleted" }, products);

    } catch (error) {
        res.status(500).json({ success: false, message: "Error", error:error.message });
    }
}

export { createProduct, getData, updateProduct, deleteProduct };
