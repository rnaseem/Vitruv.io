const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BodyParts = new Schema({
  name: {
    type: String
  },
  symptoms: [
    {
      type: Schema.Types.ObjectId,
      ref: "symptoms"
    }
  ],
  // id: {
  //   type: Number
  // }
});

module.exports = mongoose.model("Body", BodyParts);