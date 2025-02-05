const express = require("express");
const dbConnection = require("./dbconnection");
const UserModel = require("./Models/UserModel");
const MessageModel = require("./Models/MessageModel");
const dotenv = require("dotenv").config();
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const chatIo = socketIo(server, {
  cors: {
    origin: "*", // Allow all origins (you can replace "*" with specific domains like "http://localhost:3000")
    methods: ["GET", "POST"],
  },
  path: "/socket/chat", // This is the custom path
});

const shareIo = socketIo(server, {
  path: "/socket/share", // This is the custom path
});

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
app.get("/get/recipients/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await UserModel.findById(id, "recipients").populate(
      "recipients",
      "name"
    );

    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    // const data = await Promise.all(
    //   userData.recipients.map(async (ele) => {
    //     const user = await UserModel.findOne({ _id: ele }, "name");
    //     return user;
    //   })
    // );
    return res
      .status(200)
      .json({
        success: true,
        message: "Recipients are",
        data: userData.recipients,
      });
  } catch (error) {
    console.log(error.message);
  }
});

// Chat socket
chatIo.on("connection", (socket) => {
  console.log("A user connected");
  let id, rid;

  socket.on("init", (msg) => {
    id = msg.id;
    rid = msg.rid;
  });

  // Listen for a custom event from the client
  socket.on("chat message", (msg) => {
    console.log("Message received: " + msg);
    chatIo.emit("chat message", msg); // Broadcast to all clients
  });

  socket.on("message", async (message) => {
    console.log(message);

    const newMessage = await MessageModel.create({
      sender: id,
      receiver: rid,
      time: message.date,
      content: message.msg,
    });
    // Add the message reference to the sender and receiver's messages array
    await UserModel.findByIdAndUpdate(id, {
      $push: { messages: newMessage._id },
    });
    await UserModel.findByIdAndUpdate(rid, {
      $push: { messages: newMessage._id },
    });
    // let userWithMessages = await UserModel.findById(id) // Find the user by ID
    //   .populate("messages");

    // console.log(userWithMessages);

    chatIo.emit("chat" + rid, message);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
