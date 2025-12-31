import nodemailer from "nodemailer";

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: process.env.userMail,
    pass: process.env.userPass,
  },
});

// Verify transporter connection 
transporter.verify((error, success) => { 
    if (error) {
         console.error("SMTP connection failed:", error);
         } else { 
            console.log("Server is ready to take our messages:", success); 
        } 
    });

const sendMail = async({to, subject, html})=>{
  await transporter.sendMail({
    from: "rupaliwakhare184@gmail.com",
    to,
    subject,
    html
  });
}

export default sendMail;