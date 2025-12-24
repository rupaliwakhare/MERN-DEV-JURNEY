import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import productRouter from "./routes/productRoute.js";


dotenv.config()

const app = express()
app.use(express.json());


connectDB()

app.use("/api/product",productRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); 
})