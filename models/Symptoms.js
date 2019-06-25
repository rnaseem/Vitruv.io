const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SymptomsSchema = new Schema({
    name: {
        type: String
    },
    id: {
        type: Number
    }
});

module.exports = mongoose.model("Symptoms", SymptomsSchema);