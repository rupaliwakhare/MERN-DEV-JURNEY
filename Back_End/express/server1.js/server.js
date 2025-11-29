import express from "express"

const app = express()


app.get("/",(req,res)=>{
    res.send("weocome ")
})

app.get("/next",(req,res)=>{
    res.send("next page")
})

let PORT = 2020
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})