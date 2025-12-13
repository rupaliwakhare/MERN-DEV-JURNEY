import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import myMiddleware from "./middleware/myMiddleware.js";
import common_router from "./routes/commenRoutes.js";
import userRoutes from "./routes/userRoutes.js"; // <-- FIXED

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.get("/", myMiddleware, (req, res) => {
  res.send("hello");
});

// OR remove the above and keep only this:
// app.get("/", (req, res) => {
//   res.send("welcome to our server");
// });

app.use("/user", userRoutes); // <-- FIXED
app.use("/common", common_router); // <-- FIXED

// Server Start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
