const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BodyPartSchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    }
});

module.exports = mongoose.model("Body", BodyPartsSchema);