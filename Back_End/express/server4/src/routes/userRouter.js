import {createUser,getUser,updateUser,deleteUser} from "../controller/userController.js"
import express from "express"

const user_Router = express.Router();

user_Router.post("/",createUser)
user_Router.get("/",getUser)
user_Router.put("/:id",updateUser)
user_Router.delete("/:id",deleteUser)


export default user_Router;

