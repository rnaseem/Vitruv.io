const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SymptomsSchema = new Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model("Symptoms", SymptomsSchema);