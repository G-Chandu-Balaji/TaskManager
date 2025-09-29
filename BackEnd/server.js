import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = new express();
let port = process.env.PORT || 5100;

//Database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.log("Database connection  failed", err.message);
    process.exit(1);
  });

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

//start server
app.listen(port, () => {
  console.log(`Server is runnning on ${port}...`);
});
