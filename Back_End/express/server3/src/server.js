import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running and DB is connected");
});

// Server Start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
