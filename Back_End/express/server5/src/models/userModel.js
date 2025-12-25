import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
});

const userModel = mongoose.model("user", userSchema);
export default userModel;
