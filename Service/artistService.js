const express = require("express");
const artist = require("../Model/artist");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let userModel = require("../Model/artist");
const artistService = () => {
    return {
        registerUserUtil: async (userObj) => {
            try {
                let user = new userModel();
                user.first_name = userObj?.fist_name?.trim();
                user.last_name = userObj?.last_name?.trim();
                user.contactNumber = userObj?.contactNumber?.trim();
                user.emailId = userObj?.emailId?.trim();
                user.role = userObj?.role;
                let email = user.emailId;
                // user.password = await bcrypt.hash(user.password, 10);
                let savedUser;
                console.log(user);
                console.log("Here");
                await user.save();
                // try {
                //     console.log("Check");
                //     savedUser = await user.save();
                //     console.log("Check2");
                // } catch (e) {
                //     throw new Error("adding user error -->  " + e);
                // }
                console.log("Heress");
                const token = "ss";
                // const token = jwt.sign({ user_id: savedUser._id, email }, process.env.TOKEN_KEY, {
                //     expiresIn: "2h",
                // });
                // save user token
                // let response = {};
                // response.contactNumber = user.contactNumber;
                // response.emailId = user.emailId;
                // response.token = token;
                //return {result: "User created ", data: response};
            } catch (e) {

            }
        },
        loginUserUtil : async (userId) => {

        }

        // loginUserUtil: async (req) => {
        //     let emailId = req?.body?.emailId?.trim();
        //     let password = req?.body?.password?.trim();
        //     const user = await userDetailsModel.findOne({ emailId });
        //
        //     if (!(user && (await bcrypt.compare(password, user.password)))) {
        //         throw new Error("Invalid User " + emailId + "  " + password);
        //     }
        //     const token = jwt.sign(
        //         { user_id: user._id, emailId },
        //         process.env.TOKEN_KEY,
        //         {
        //             expiresIn: "2h",
        //         }
        //     );
        //     // save user token
        //     let response = {};
        //     response.createdProject = user.createdProject;
        //     response.joinedProject = user.joinedProject;
        //     response.token = token;
        //     return { result: "logged IN", data: response };
        // },
    };
};

module.exports = artistService;