const express = require("express");
const router = express.Router();

const Text = require("../../models/Text");

router.post("/", async (req, res) => {
  const text = new Text({
    text: req.body.text,
    start: req.body.start,
    end: req.body.end,
  });
  try {
    const newText = await text.save();
    res.status(201).json(newText);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const texts = await Text.find();
    res.json(texts);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

module.exports = router;
