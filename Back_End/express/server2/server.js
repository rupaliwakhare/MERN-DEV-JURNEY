import express, { json } from "express"
import fs from "fs"



const app = express()
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome to our home page")
})

app.post("/gettdata",(req,res)=>{
    fs.readFile("data.json","utf-8",(err,data)=>{
        if(err) res.send(err)
            else res.send(JSON.parse(data))
    })
})

app.post("/postdata",(req,res)=>{
    fs.readFile("data.json","utf-8",(err,data)=>{
        if(err) res.send(err);
        let jsondata = JSON.parse(data);
       jsondata.product.push(req.body)
        fs.writeFile("data.json",JSON.stringify(jsondata),(err,data)=>{
            if(err) res.send(err)
                else res.send("data posted done")
        })
    })
})
app.post("/userdata",(req,res)=>{
    fs.readFile("data.json","utf-8",(err,data)=>{
        if(err) res.send(err);
        let jsondata = JSON.parse(data);
       jsondata.user.push(req.body)
        fs.writeFile("data.json",JSON.stringify(jsondata),(err,data)=>{
            if(err) res.send(err)
                else res.send("data posted done")
        })
    })
})

let PORT = 2093
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})