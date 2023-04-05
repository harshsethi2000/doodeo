const jwt = require("jsonwebtoken");
require("dotenv").config();

const config = process.env;

const verifyToken = (req, res, next) => {
    const token =
        req.body.token || req.query.token || req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    // jwt.sign({ user_id: "harsh.sethi@rigi.club", email }, process.env.TOKEN_KEY, {
    //     expiresIn: "2h",
    // });
    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.user = decoded;
    } catch (err) {
        next();
        //return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = verifyToken;