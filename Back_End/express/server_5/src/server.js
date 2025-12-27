import express from "express";
import connectDB from "../src/config/db.js";
import productrouter from "./routes/productRoute.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 6696;

connectDB();


app.get("/",()=>{
    res.send("welcome to our server");
    
})

app.use("/api/product",productrouter)

app.listen(PORT,()=>{
 console.log(`server is running on http://localhost:${PORT}`);
})