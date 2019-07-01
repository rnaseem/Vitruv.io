const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name: {
        type: String
    },
    dob: {
        type: String
    },
    age: {
        type: Number
    },
    otherProblems: {
        type: String
    },
    lastPsyProvider: {
        type: String
    },
    lastPsyVisit: {
        type: String
    },
    psyMeds: {
        type: String
    },
    psySuicide: {
        type: String
    },
    erCount: {
        type: String
    },
    erLastTime: {
        type: String
    },
});


module.exports = mongoose.model("Form", FormSchema);