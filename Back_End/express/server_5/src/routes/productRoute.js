import express from "express";
import { deleteProduct, getProduct, postProduct, updateProduct } from "../controllers/productController.js";
import loginverify from "../middlewares/auth.middle.js"
import checkrole from "../middlewares/role.middle.js";

const productrouter = express.Router();

productrouter.get("/getdata", getProduct);
productrouter.post("/postdata",loginverify,checkrole("admin"),postProduct);
productrouter.put("/updatedata/:id",loginverify,checkrole("admin"), updateProduct)
productrouter.delete("/deletedata/:id",loginverify,checkrole("admin"), deleteProduct)

export default productrouter;