const mongoose = require("mongoose");
const bodyParser = require("body-parser");

async function connectToDB() {
    let mongoURI = process.env.MONGO_URI;
    console.log("mongo URI --------->>>>" + mongoURI);
    return mongoose.connect(
        mongoURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        async function (err) {
            if (err) {
                console.log("Error while connecting to Mongo Cluster", err);
            } else {
                console.log("Connected to mongodb URI : " + mongoURI);
            }
        }
    );
}

module.exports = connectToDB;