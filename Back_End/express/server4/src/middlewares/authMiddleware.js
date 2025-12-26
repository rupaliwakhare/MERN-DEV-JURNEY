import jwt from "jsonwebtoken";

export const authMiddleware = (req,res,next)=>{
  try {
    
    const token = req.headers.authorization;

    if (!token) return res.status(401).send("Token not provided");

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.userId = decode.id;

    next();
  } catch (error) {
    res.status(401).send("Invalid token")
  }

    
}