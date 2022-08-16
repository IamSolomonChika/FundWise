const express = require("express");
const router = express.Router();


router.get("/", (req, res, next) => {
    res.render("home");
});

router.get("/contact", (req, res, next) => {
    res.render("contact");
});

router.get("/services", (req, res, next) => {
    res.render("services");
});

router.get("/signup_signin", (req, res, next) => {
    res.render("signup_signin");
});

module.exports = router;