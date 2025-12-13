import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productModel from "./models/productModel.js";


dotenv.config()
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

connectDB();

app.get("/",(req,res)=>{
  res.send("welcome to our backend home page")
})

app.post("/",async(req,res)=>{
  const {name,price,mobile} = req.body;
  const product = await productModel.create({name,price,mobile})
  res.send("product added")
})



app.listen(PORT,()=>{
    console.log(`server is created ! http://localhost:${PORT}`)
    
})