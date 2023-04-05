var mongoose = require("mongoose"),
  Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const role = ["user", "artist"];
var artistSchema = new mongoose.Schema(
  {
      first_name : String,
      last_name : String,
      stage_name : String, //in artist only
      session_price : Number,
      offerings : [Object],
    contactNumber: { type: String},
    emailId: { type: String},
    companyId: String,
    companyName: String,
    genre: [String],
    role: { type: String, enums: role },
    type: String,//in artist only
    profileObj: {
          pic : String,
      links: [
        {
          type: { type: String },
          url: String,
        },
      ],
    },
    otp: { type: String, default: "123456" },
    description: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("userModel", artistSchema);
