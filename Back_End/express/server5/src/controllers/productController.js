import productModel from "../models/productModel.js";

// create product

const createProduct = async (req, res) => {
  const { name, price, mobile } = req.body;
  const product = await productModel.create({ name, price, mobile });
  res.send("product added");
};

const getData = async (req, res) => {
  let products = await productModel.find();
  res.send(products);
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const products = await productModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.send("Product Updated");
};

let deleteProduct = async (req, res) => {
  const id = req.params.id;
  const products = await productModel.findByIdAndDelete(id, req.body, {
    new: true,
  });
  res.send({ message: "Product Deleted" }, products);
};

export { createProduct, getData, updateProduct, deleteProduct };
