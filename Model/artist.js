var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const role = ["user", "artist"];
var artistSchema = new mongoose.Schema(
  {
    name: String,
    gender: String,
    age: Number,
    contactNumber: { type: String, unique: true },
    emailId: { type: String, unique: true },
    companyId: String,
    companyName: String,
    genre: [String],
    role: { type: String, enums: role },
    type: String,
    profileObj: {
      links: [
        {
          type: { type: String },
          url: String,
        },
      ],
    },
    otp: { type: String, default: "123456" },
    description: String,
    timeZone: String,
    sessionPrice: Number,
    sessionDuration: Number, // in mins
  },
  { timestamps: true }
);
module.exports = mongoose.model(
  "userDetailsModel",
  artistSchema,
  "userDetailsModel"
);
