const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NumberSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  accumulated: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("number", NumberSchema);
