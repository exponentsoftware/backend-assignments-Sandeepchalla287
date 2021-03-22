const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    status: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      enum: ["Work", "Hobby", "Task"],
      required: true
    }
  },
  { timestamp: true }
);

module.exports = mongoose.model("user", userSchema);