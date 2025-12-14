import userModel from "../models/userModel.js";

// Create user
const  createUser = async(req,res) => {
const {name,age,email,password,mobile} = req.body
const user = await userModel.create({
    name,
    age,
    email,
    password,
    mobile
})
 res.json({success:true,massage:"User Created",user})
};

// getuser

const getUser = async (req,res)=>{
    let users= await userModel.find()
    res.send(users)
}

// update user

const updateUser = async(req,res)=>{
   const id = req.params.id
   const users = await userModel.findByIdAndUpdate(id,req.body)
   res.send("user updated",users)

}
// delete user

const deleteUser = async(req,res)=>{
   const id = req.params.id
   const users = await userModel.findByIdAndDelete(id,req.body)
   res.send("user deleted",users)

}

export {createUser,getUser,updateUser,deleteUser};