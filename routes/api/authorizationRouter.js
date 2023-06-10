const express = require("express");
const router = express.Router();

const authorizationController = require("../../controllers/authorization");
const schemas = require("../../schemas/auth");
const { authenticate } = require("../../middlewares");
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
router.get("/current", authenticate, authorizationController.getCurrent);

router.post("/logout", authenticate, authorizationController.logout);

module.exports = router;
