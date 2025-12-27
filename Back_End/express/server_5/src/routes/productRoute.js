import express from "express";
import { deleteProduct, getProduct, postProduct, updateProduct } from "../controllers/productController.js";


const productrouter = express.Router();

productrouter.get("/getdata",getProduct);
productrouter.post("/postdata",postProduct);
productrouter.put("/updatedata/:id", updateProduct)
productrouter.delete("/deletedata/:id", deleteProduct)

export default productrouter;