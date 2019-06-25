const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    email:{
        type: String,
        trim: true,
        required: "Email is Required"
    },
    fullName: {
        type: String,
        trim: true,
        required: "name is Required"
        // index: {
        //     unique: true
        // }
    },
    password: {
        trim: true,
        required: "password is Required",
        type: String
    }
});

// UserSchema.methods.comparePassword = function (inputPass) {
//     return bcrypt.compareSync(inputPass, this.password);
// };

// UserSchema.pre("save", function (next) {
//     if (!this.isModified("password")) return next();

//     this.password = bcrypt.hashSync(this.password, 10);

//     return next();
// });

module.exports = mongoose.model("User", UserSchema);
