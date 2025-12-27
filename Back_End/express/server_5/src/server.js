import express from "express";
import connectDB from "../src/config/db.js";

const app = express();

const PORT = process.env.PORT || 6696;

app.get("/",()=>{
    res.send("welcome to our server");
    
})

connectDB()

app.listen(PORT,()=>{
 console.log(`server is running on http://localhost:${PORT}`);
})