import User from "../model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  console.log("Register API hit");
  try {
    const { username, email, password } = req.body;
    console.log("Password:", password);
    console.log("Type:", typeof password);

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Fields must be filled" });
    }

    const data = await User.findOne({ email });

    if (data) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashed,
    });

    return res.status(201).json({
      message: "New user registered",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Register error",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await User.findOne({ email });

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    const pmatch = await bcrypt.compare(password, data.password);

    if (!pmatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    if (!process.env.JWT_KEY) {
      return res.status(500).json({
        message: "JWT_KEY missing in .env",
      });
    }

    const token = jwt.sign(
      {
        id: data._id,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "1d",
      },
    );

    data.password = undefined;

    return res.status(200).json({
      message: "Login successful",
      token,
      user: data,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};
