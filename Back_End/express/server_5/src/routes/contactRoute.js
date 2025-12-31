import express from "express";
import sendMail from "../utils/mailer.js";


const contactRouter = express.Router();

contactRouter.post("/contact",async(req,res)=>{
    try {
        const {name,email,message} = req.body;

        await sendMail({
            to:email,
            subject:"New contact request",
            html:`
            <h1>${name}</h1>
            <h4>${message}</h4>`
        })
        res.json({message:"Mail sent successfully"})
    } catch (error) {
        res.status(500).json({message:"Error sending mail", error:error.message})
    }
})

export default contactRouter