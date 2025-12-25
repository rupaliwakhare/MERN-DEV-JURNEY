import userModel from "../models/userModel.js"

const CreateUser = async(req,res)=>{
    try {
       const user = await userModel.create(req,body)
       res.send({success:true,message:true, user}) 
    } catch (error) {
        console.log(error);
        
    }

}

export default(CreateUser)