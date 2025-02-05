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
  try {
    res.send("Hello World!");
  } catch (error) {
    console.log(error.message);
  }
});

// Sign-In
app.post("/sign-in", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
});

// Login
app.get("/login", async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
});

// add recipients
app.put("/add/recipient/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const recipientId = await UserModel.findOne({ email: email }).select("_id");
    // console.log(recipientId._id);
    if (!recipientId) {
      return res.status(400).json({
        success: false,
        message: "Recipient not found",
      });
    }

    await UserModel.updateOne(
      { _id: id },
      { $addToSet: { recipients: recipientId._id } }
    );
    await UserModel.updateOne(
      { _id: recipientId },
      { $addToSet: { recipients: id } }
    );

    return res.status(200).json({
      success: true,
      message: "Recipient added",
      data: await UserModel.find(),
    });
  } catch (error) {
    console.log(error.message);
  }
});

// Get all recipients
app.get("/get/recipients/:id", async (req, res) => {});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
