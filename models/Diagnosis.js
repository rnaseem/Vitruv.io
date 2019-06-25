const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DiagnosisSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    bodyPart: [
        {
            type: Schema.type.ObjectId,
            ref: "BodyPart"
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