import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./router/userR.js";
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use("/user", router);
const server = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb is conneccted");
    app.listen(port, () => {
      console.log(`server started at port ${port}`);
    });
  } catch (error) {
    console.log("mongodb connection error");
  }
};
server();
