const express = require("express");
const router = express.Router();
const bookingController = require("../Controller/bookingController")();
//const auth = require("../Middleware/auth");

const bookAPI = () => {
  router.post("/slot", bookingController.createBooking);

  return router;
};

module.exports = bookAPI;
