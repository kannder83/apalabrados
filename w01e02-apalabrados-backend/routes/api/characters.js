const express = require("express");
const router = express.Router();

const Character = require("../../models/Character");

router.post("/", async (req, res) => {
  const character = new Character({
    character: req.body.character,
  });
  try {
    const newCharacter = await character.save();
    res.status(201).json(newCharacter);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
});

module.exports = router;
