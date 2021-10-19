const express = require("express");
const router = express.Router();

const DataService = require("../../services/data.service");

const service = new DataService();

router.post("/", async (req, res) => {
  if (req.body.type === 1) {
    try {
      const bodyNumber = req;
      const newNumber = await service.create(bodyNumber, "number");
      res.status(201).json(newNumber);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  }
  if (req.body.type === 2) {
    try {
      const bodyText = req;
      const newText = await service.create(bodyText, "text");
      res.status(201).json(newText);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  }
  if (req.body.type === 3) {
    try {
      const bodyCharacter = req;
      const newCharacter = await service.create(bodyCharacter, "character");
      res.status(201).json(newCharacter);
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  }
});

module.exports = router;
