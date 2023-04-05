const express = require("express");
const router = express.Router();
const userController = require("../Controller/artistController")();
//const auth = require("../Middleware/auth");

const userAPI = () => {
    router.post("/registerArtist", userController.registerArtist);


    return router;
};

module.exports = userAPI;