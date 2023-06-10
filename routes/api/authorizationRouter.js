const express = require("express");
const router = express.Router();

const authorizationController = require("../../controllers/authorization");
const schemas = require("../../schemas/auth");
const { validateBody } = require("../../decorators");

router.post(
    "/register",
    validateBody(schemas.userAuthSchema),
    authorizationController.register
);

router.post(
    "/login",
    validateBody(schemas.userAuthSchema),
    authorizationController.login
);

module.exports = router;
