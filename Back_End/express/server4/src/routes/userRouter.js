import createUser from "../controller/userController.js";
import express from "express"

const user_Router = express.Router();

user_Router.post("/",createUser)

export default user_Router;
