const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DiagnosisSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  commonName: {
    type: String
  },
  symptomId: {
    type: Number
  }
});

module.exports = mongoose.model("Diagnosis", DiagnosisSchema)