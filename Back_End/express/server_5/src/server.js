import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 6696

app.get("/",(req,res)=>{
    res.send("welcome to our server")
})

connectDB()

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
