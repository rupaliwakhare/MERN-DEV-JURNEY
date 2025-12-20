import jwt from "jsonwebtoken";

const authMiddleware = (req,res,next)=>{
    let a = 123456;
    const data = req.headers.authorization;

    if(!data) return res.send("Data not found")


        if(data === a){
              next();
        }else{
            res.send("Data not matched")
        }

      

}

export default authMiddleware;