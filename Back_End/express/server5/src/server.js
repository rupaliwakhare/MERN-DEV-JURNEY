import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import productRouter from "./routes/productRoute.js";
import UserRouter from "./routes/userRoute.js";


dotenv.config()

const app = express()
app.use(express.json());
const PORT = process.env.PORT || 3000;
connectDB()


app.use("/api/product", productRouter);
app.use("/api/user", UserRouter);


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`); 
})