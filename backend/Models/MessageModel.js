const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Users",
    },
    time: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Messages", messageSchema);
