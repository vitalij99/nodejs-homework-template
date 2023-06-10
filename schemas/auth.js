const Joi = require("joi");

const { emailRegexp } = require("../values/patterns");

const userAuthSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required().messages({
        "any.required": `missing required email field`,
        "string.empty": `email cannot be an empty field`,
    }),
    password: Joi.string().required().messages({
        "any.required": `missing required password field`,
        "string.empty": `password cannot be an empty field`,
    }),
    subscription: Joi.string().required().messages({
        "any.required": `missing required phone field`,
        "string.empty": `phone cannot be an empty field`,
    }),
});

module.exports = {
    userAuthSchema,
};
