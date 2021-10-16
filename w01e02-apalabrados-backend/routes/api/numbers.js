const express = require("express");
const router = express.Router();

const Numbers = require("../../models/Number");

router.post("/", async (req, res) => {
  const number = new Numbers({
    number: req.body.number,
    accumulated: req.body.accumulated,
  });
  try {
    const newNumber = await number.save();
    res.status(201).json(newNumber);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const numbers = await Numbers.find();
    res.json(numbers);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

module.exports = router;
