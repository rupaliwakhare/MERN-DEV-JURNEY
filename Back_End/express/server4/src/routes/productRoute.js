import express from "express";
import {createProduct,getData,updateProduct, deleteProduct,} from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const productRouter = express.Router();

productRouter.post("/add",authMiddleware, createProduct);
productRouter.get("/get",authMiddleware, getData);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter;
