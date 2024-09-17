import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, TechShots!");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on PORT ${PORT}`);
});
