import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next)=>{
    let a = 123456;
    const data = req.headers.authorization;

    if(!data) return res.send("Data not found");

    if(data == a){
        next();
     }else{
        res.send("Data does not matched")
     }
}