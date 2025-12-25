import express from "express";
import {
 Signup,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  Login,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", Signup); // Signup
userRouter.post("/login", Login); // Login
userRouter.get("/get", getUsers); // Read all
userRouter.get("/:id", getUserById); // Read single
userRouter.put("/update/:id", updateUser); // Update
userRouter.delete("/delete/:id", deleteUser); // Delete

export default userRouter;
