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


export default createUser;