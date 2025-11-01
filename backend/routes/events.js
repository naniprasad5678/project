const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const auth = require("../middleware/authMiddleware");

// Get user's events
router.get("/", auth, async (req, res) => {
  try {
    const events = await Event.find({ createdBy: req.user.id }).sort({ date: -1 });
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Create event
router.post("/create", auth, async (req, res) => {
  try {
    const { title, desc } = req.body;
    if (!title) return res.status(400).json({ message: "Title required" });
    const event = new Event({ title, desc, createdBy: req.user.id });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
