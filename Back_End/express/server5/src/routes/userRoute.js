import express from "express"
import CreateUser from "../controllers/userController.js"

const UserRouter = express.Router();


UserRouter.post("/create",CreateUser)


export default UserRouter;