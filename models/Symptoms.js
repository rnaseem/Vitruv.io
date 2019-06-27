const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SymptomsSchema = new Schema({
  name: {
    type: String
  }
  // _id: {
  //   type: Number
  // }
});

module.exports = mongoose.model("Symptoms", SymptomsSchema);