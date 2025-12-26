import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

// Create User
// const createUser = async (req, res) => {
//   try {
//     const user = await userModel.create(req.body);
//     res.status(201).json({ success: true, message: "User created", user });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Error creating user",
//       error: error.message,
//     });
//   }
// };


// Signup user
const Signup = async (req, res) => {
  try {
    const {name,email,age,password,mobile} = req.body;

    const existemail = await userModel.findOne({email})
    if(existemail) return res.status(400).json({success:false,message:"Email is already registered"})

    const existemobile = await userModel.findOne({ mobile });
    if (existemobile) return res .status(400).json({ success: false, message: "Mobile number is already registered" });



    const hashpassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        name,
        email,
        age,
        password: hashpassword,
        mobile});
    res.status(201).json({ success: true, message: "User created", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating user",
      error: error.message,
    });
  }
};

// Login user
const Login = async(req,res) => {
    try {
        const {email,password} = req.body;

        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).json({ success: false, message: "User not found" });

        const match = await bcrypt.compare(password,user.password);
        if(!match) return res.status(4000).json({sucess:true,message:"Invalid credinatial"});

        const token = jwt.sign({ id: user._id ,age:user.age}, process.env.SECRET_KEY, {expiresIn: "1h",});


        res.json({sucess:true,message:"Login sucessful",user,token})

    } catch (error) {
        console.log(error);
        
    }
}










// Get All Users
const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res
      .status(200)
      .json({ success: true, message: "Fetched all users", users });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message,
    });
  }
};

// Get Single User by ID
const getUserById = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "Fetched user", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching user",
      error: error.message,
    });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User updated", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating user",
      error: error.message,
    });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User deleted", user });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting user",
      error: error.message,
    });
  }
};

export { Signup,Login, getUsers, getUserById, updateUser, deleteUser };
