const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// User signup route
router.post("/signup", UserController.signup);

// User login route
router.post("/login", UserController.login);

module.exports = router;
