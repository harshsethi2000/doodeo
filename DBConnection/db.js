const mongoose = require("mongoose");
const bodyParser = require("body-parser");

async function connectToDB() {
    let mongoURI = process.env.MONGO_URI;
    console.log("mongo URI --------->>>>" + mongoURI);
    mongoose.connect(
        mongoURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
    );
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });

}

module.exports = connectToDB;