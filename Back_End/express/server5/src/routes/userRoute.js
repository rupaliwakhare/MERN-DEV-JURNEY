import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/add", createUser); // Create
userRouter.get("/get", getUsers); // Read all
userRouter.get("/:id", getUserById); // Read single
userRouter.put("/update/:id", updateUser); // Update
userRouter.delete("/delete/:id", deleteUser); // Delete

export default userRouter;
