const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const DiagnosisSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  commoneName: {
    type: String
  },
  bodyPart: [
    {
      type: Schema.Types.ObjectId,
      ref: "BodyPart"
    }
  ],
  symptoms: [
    {
      type: Schema.Types.ObjectId,
      ref: "Symptoms"
    }
  ]
});

module.exports = mongoose.model("Diagnosis", DiagnosisSchema)