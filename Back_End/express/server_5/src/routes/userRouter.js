import express from "express";
import { register, login, getAlluser,updateUser,deleteUser } from "../controllers/authController.js";
import loginverify from "../middlewares/auth.middle.js"
import checkrole from "../middlewares/role.middle.js";

const userrouter = express.Router();

userrouter.post("/register", register);
userrouter.post("/login", login);
userrouter.get("/getall", loginverify,checkrole("admin"),getAlluser)
userrouter.put("/updatedata/:id",loginverify,checkrole("admin"), updateUser)
userrouter.delete("/deletedata/:id",loginverify,checkrole("admin"), deleteUser)

export default userrouter;
