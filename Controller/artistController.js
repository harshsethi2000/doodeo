const { json } = require("express");
const express = require("express");
const router = express.Router();
//const userService = require("../Service/userService")();
const artistService = require("../Service/artistService")();
const userController = () => {
    function validatePhoneNumber(phoneNumber) {
        if(phoneNumber?.length != 10)
            return false;
        return true;
    }
    function validateEmail(email) {
        return email.match(
            "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
        );
    }
    function validateUserRegistrationData(userObj) {
        let validRole = {
            user : "user",
            artist : "artist",
        }
        let isAnyFieldInvalid = false;
        let invalidDataObj = {
        }
        if(!userObj?.first_name) {
            invalidDataObj.first_name = "First Name is mandatory Field";
            isAnyFieldInvalid = true;
        }
        if(!userObj?.last_name) {
            invalidDataObj.last_name = "Last Name is mandatory Field";
            isAnyFieldInvalid = true;
        }

        if(!userObj?.contactNumber) {
            invalidDataObj.contactNumber = "Phone Number is mandatory Field";
            isAnyFieldInvalid = true;
        }
        else if(!validatePhoneNumber(userObj.contactNumber)) {
            isAnyFieldInvalid = true;
            invalidDataObj.contactNumber = "Invalid Phone Number";
        }
        if(!userObj?.email) {
            invalidDataObj.email = "Email is mandatory Field";
            isAnyFieldInvalid = true;
        }
        if(userObj?.role === validRole.artist) {
            //validate for creator

        }
        let isUserDataInvalid = isAnyFieldInvalid;
        return {isUserDataInvalid, invalidDataObj};
    }
    return {
        registerArtist : async (req, res) => {
            console.log("Register Artist Got Invoked");
            try {
                if(!req?.body?.user_obj)
                    throw new Error("user_obj is mandatory for registration flow");
                let { isUserDataInvalid, invalidDataObj} = validateUserRegistrationData(req?.body?.user_obj);
                if(isUserDataInvalid) {
                   return res.status(400).json({
                       message : "Invalid Data",
                       data : invalidDataObj
                   })
                }

                let registeredUser = await artistService.registerUserUtil(req?.body?.user_obj);
                console.log("Sending Header " + JSON.stringify(registeredUser));
                return res.status(200).json({ message: registeredUser });
            } catch (e) {
                console.log("Error while " + e?.message);
                //return res.status(400).json({ message: e.message });
            }
        },
        loginUser: async (req, res) => {
            try {
                let userId = req?.body?.userId?.trim();
                let otp = req?.body?.otp;
                if(!userId || !otp)
                    throw new Error("Invalid User Id or otp");
                let password = req?.body?.password?.trim();
                r = await artistService.loginUserUtil(req);
                return res.status(200).json({ message: r });
            } catch (e) {
                return res.status(400).json({ message: e.message });
            }
        },
    };
};
module.exports = userController;