const express = require("express");
const app = express();
var http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const artistAPI = require("./API/artistApi")();
const bookAPI = require("./API/bookingApi")();
const connectToDB = require("./DBConnection/db");
require("dotenv").config();
const { API_PORT } = process.env;

console.log("API_port ---> " + process.env.API_PORT);

let portNumber = process.env.API_PORT || 3001;
server.listen(portNumber, async function () {
  console.log("Server is running on " + portNumber);
  app.use(bodyParser.json());
  await connectToDB().catch((err) => {
    console.log("Error while connecting to Mongoose " + err?.message);
  });

  app.use("/api/artist/", artistAPI);
  app.use("/api/book", bookAPI);
});
