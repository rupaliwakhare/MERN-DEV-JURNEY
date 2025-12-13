import express from "express"
import {createProduct,getData,updateProduct,deleteProduct} from "../controller/productController.js"


const productRouter = express.Router();


productRouter.post("/" ,createProduct)
productRouter.get("/",getData)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter;