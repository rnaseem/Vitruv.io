const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// let ObjectId = mongoose.Schema.Types.ObjectId;

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
      ref: "bodyPart"
    }
  ],
  symptoms: [
    {
      type: Schema.Types.ObjectId,
      ref: "symptoms"
    }
  ]
});


module.exports = mongoose.model("Diagnosis", DiagnosisSchema)