import express from "express"
import dotenv from "dotenv"
import userRoute from '../src/routes/userRoute.js'

dotenv.config()
const app = express();

app.get("/",(req,res)=>{
  res.send("welcome to our backend home page")
})

app.use("/",userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is created ! http://localhost:${PORT}`);
    
})