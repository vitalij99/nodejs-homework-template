const express = require("express");
const router = express.Router();

const authorizationController = require("../../controllers/authorization");

router.post("/register", authorizationController.register);
router.post("/login", authorizationController.login);

module.exports = router;
