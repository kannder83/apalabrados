const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  character: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("character", CharacterSchema);
