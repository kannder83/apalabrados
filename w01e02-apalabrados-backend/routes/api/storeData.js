const express = require("express");
const router = express.Router();

const Numbers = require("../../models/Number");
const Text = require("../../models/Text");
const Character = require("../../models/Character");

router.post("/", async (req, res) => {
  if (req.body.type === 1) {
    try {
      const number = new Numbers({
        number: req.body.number,
        accumulated: req.body.number * 2,
      });
      const newNumber = await number.save();
      res.status(201).json(newNumber);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  }
  if (req.body.type === 2) {
    try {
      const text = new Text({
        text: req.body.text,
        start: req.body.start,
        end: req.body.end,
      });
      const newText = await text.save();
      res.status(201).json(newText);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  }
  if (req.body.type === 3) {
    try {
      const character = new Character({
        character: req.body.character,
      });
      const newCharacter = await character.save();
      res.status(201).json(newCharacter);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  }
});

module.exports = router;
