let mongoose = require("mongoose");
let status = [
  "AVAILABLE",
  "CONFIRMED",
  "CHECKED_IN",
  "CANCELED",
  "ABANDONED",
  "BLOCKED",
];
let booking = new mongoose.Schema(
  {
    start_time: { type: String, index: true },
    start_time_utc: { type: Date, index: true },
    end_time: { type: String, index: true },
    end_time_utc: { type: Date, index: true },
    user_id: { type: String, index: true },
    artist_id: { type: String, index: true },
    status: { type: String, enum: status },
    transaction_id: String,
    provider_timezone: String,
    consumer_timezone: String,
    meet_id: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("booking", booking, "booking");
