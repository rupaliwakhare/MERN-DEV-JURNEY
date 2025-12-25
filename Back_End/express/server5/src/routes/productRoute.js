import express from "express";
import {createProduct,getData,updateProduct, deleteProduct,} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/add", createProduct);
productRouter.get("/get", getData);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
