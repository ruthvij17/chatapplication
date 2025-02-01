const express = require("express");
const dbConnection = require("./dbconnection");
const UserModel = require("./Models/UserModel");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

dbConnection();

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Sign-In
app.post("/sign-in", async (req, res) => {
  const { name, email, password } = req.body;
  const users = await UserModel.findOne({ email });
  if (users) {
    return res.status(400).json({
      success: false,
      message: "User already exist",
    });
  }

  await UserModel.create({ name, email, password });
  const data = await UserModel.find();

  return res.status(200).json({
    success: true,
    message: "User added successfully",
    data: data,
  });
});

// Login
app.get("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email, password }).select(
    "name email"
  );

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Invalid credencials",
    });
  }
  return res.status(200).json({
    success: true,
    message: "User found",
    data: user,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
