import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import user_Router from "./routes/userRouter.js";


dotenv.config()
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use("/api/product",productRouter)
app.use("/api/",user_Router)

connectDB();


app.listen(PORT,()=>{
    console.log(`server is created ! http://localhost:${PORT}`)
    
})