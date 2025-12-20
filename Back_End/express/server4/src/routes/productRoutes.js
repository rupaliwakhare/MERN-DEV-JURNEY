import express from "express"
import {createProduct,getData,updateProduct,deleteProduct} from "../controller/productController.js"
import authMiddleware from "../middleware/authMiddleware.js";
import middle2 from "../middleware/middle.js";


const productRouter = express.Router();


productRouter.post("/",middle2 ,createProduct)
productRouter.get("/",authMiddleware, getData)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter;