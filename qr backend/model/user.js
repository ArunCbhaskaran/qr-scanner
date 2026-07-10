import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "enter your email"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
});
const User = mongoose.model("User", userSchema);

export default User;
