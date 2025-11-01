const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  desc: String,
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Event", eventSchema);
