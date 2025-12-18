import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Create user
// const  createUser = async(req,res) => {
// const {name,age,email,password,mobile} = req.body
// const user = await userModel.create({
//     name,
//     age,
//     email,
//     password,
//     mobile
// })
//  res.json({success:true,massage:"User Created",user})
// };

const signup = async (req, res) => {
  try {
    const { name, email, age, password, mobile } = req.body;

    const existEmail = await userModel.findOne({ email });
    if (existEmail) return res.status(400).json({ message: "Email is already register" });

     const existMobile = await userModel.findOne({ mobile });
     if (existMobile)  return res.status(400).json({ message: "Mobile number is already register" });
     

      const hashedPassword = await bcrypt.hash(password,10)
    const user = await userModel.create({
      name,
      email,
      age,
      password:hashedPassword,
      mobile,
    });
    res.status(201).send({ message: "user created", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const login = async (req,res)=>{
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) return res.status(400).json({ message: "User not found" });

      const match = await bcrypt.compare(password, user.password);
      if(!match) return res.status(400).json({message:"Invalid credintials"})

        const token = jwt.sign({id:user._id}, "mysecretkey123",{expiresIn:"1h"})
      res.json({message:"Login successful", user,token})
    } catch (error) {
        console.log(error);
        
    }
}

// getuser

const getUser = async (req, res) => {
  let users = await userModel.find();
  res.send(users);
};

// update user

const updateUser = async (req, res) => {
  const id = req.params.id;
  const users = await userModel.findByIdAndUpdate(id, req.body, { new: true });
  res.send("user updated", users);
};
// delete user

const deleteUser = async (req, res) => {
  const id = req.params.id;
  const users = await userModel.findByIdAndDelete(id, req.body);
  res.send("user deleted", users);
};

export { signup,login, getUser, updateUser, deleteUser };
