const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TextSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("text", TextSchema);
