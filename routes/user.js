const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
// Middleware to save the URL the user was trying to access
const {saveRedirectUrl} = require("../middleware.js");
const userController = require('../controllers/users.js');

router.route("/signup")
    //SignUp Route
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.signUpUser));

router.route("/login")
    //Login Route
    .get(userController.renderLoginForm)

    .post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true,}), userController.loginUser );

//Logout Route
router.get("/logout", userController.logoutUser);

module.exports = router;