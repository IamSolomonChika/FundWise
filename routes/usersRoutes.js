const express = require("express");
const router = express.Router();

const cleanBody = require("../middlewares/cleanbody");
const { validateToken } = require("../middlewares/validateToken");

const userController = require("../controllers/userController");

router.post("/signup", cleanBody, userController.Signup);

router.patch("/activate", cleanBody, userController.Activate);

router.post("/login", cleanBody, userController.Login);

router.patch("/forgot", cleanBody, userController.ForgotPassword);

router.patch("/reset", cleanBody, userController.ResetPassword);

router.get("/referred", validateToken, userController.ReferredAccounts);

router.get("/logout", validateToken, userController.Logout);

module.exports = router;