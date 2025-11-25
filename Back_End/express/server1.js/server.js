import express from "express"

const app = express()



let PORT = 2020
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})