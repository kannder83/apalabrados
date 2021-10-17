const Numbers = require("../models/Number");
const Text = require("../../models/Text");
const Character = require("../../models/Character");

class DataService {
  constructor() {
    this.dataNumber = [];
    this.dataString = [];
    this.dataCharacter = [];
  }

  async create(data, type) {
    if (type == "number") {
      const newData = new Numbers({
        number: data.body.number,
        accumulated: data.body.accumulated,
      });
      const newStoreData = await newData.save();
      return newStoreData;
    }
    if (type == "text") {
      const newData = new Text({
        text: data.body.text,
        start: data.body.start,
        end: data.body.end,
      });
      const newStoreData = await newData.save();
      return newStoreData;
    }
    if (type == "character") {
      const newData = new Character({
        character: req.body.character,
      });
      const newStoreData = await newData.save();
      return newStoreData;
    }
  }
}

module.exports = DataService;
