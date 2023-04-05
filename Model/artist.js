var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var artistSchema = new mongoose.Schema(
    {
        name: String,
        gender: String,
        age: Number,
        createdProject: Array,
        joinedProject: Array,
        contactNumber: { type: String, unique: true },
        emailId: { type: String, unique: true },
        password: String,
        companyId: String,
        companyName: String,
    },
    { timestamps: true }
);
module.exports =
    mongoose.model("userDetailsModel", artistSchema);