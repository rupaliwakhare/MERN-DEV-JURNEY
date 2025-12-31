import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const register = async(req,res)=>{
    try {
        const { name, email, password, role } = req.body;
        const hashpass = await bcrypt.hash(password, 10);

        const user = await userModel.create({
          name,
          email,
          password: hashpass,
          role,
        });
        res.status(201).json({ message: "User created", user });
    } catch (error) {
      res.status(500).send("error");

    }
};

const login = async(req,res)=>{
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Wrong password" });

        const token = jwt.sign({ id: user._id, role:user.role }, process.env.SECRET_KEY,{expiresIn:"2d"});


        res.json({ message: "Login", token });
    } catch (error) {
        res.status(500).json({message:"Error",error:error.message})
    }

}

const getAlluser = async(req,res)=>{
    try {
       let Alluser = await userModel.find();
       res.status(200).send(Alluser);
    } catch (error) {
       res.status(500).json({ message: "Error", error: error.message });
    }
}


const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: "User updated", user });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};


const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted", user });
  } catch (error) {
    res.status(500).json({ message: "Error", error: error.message });
  }
};

export {register, login, getAlluser,updateUser,deleteUser};