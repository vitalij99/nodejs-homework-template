const Joi = require("joi");

const phoneRegexp = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s/0-9]*$/;

const contactsAddSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": `missing required name field`,
        "string.empty": `name cannot be an empty field`,
    }),
    email: Joi.string().email().required().messages({
        "any.required": `missing required name field`,
        "string.empty": `email cannot be an empty field`,
    }),
    phone: Joi.string().pattern(phoneRegexp).required().messages({
        "any.required": `missing required name field`,
        "string.empty": `phone cannot be an empty field`,
    }),
});

const contactsUpdate = Joi.object({
    name: Joi.string().messages({
        "string.empty": `name cannot be an empty field`,
    }),
    email: Joi.string().email().messages({
        "string.empty": `email cannot be an empty field`,
    }),
    phone: Joi.string().pattern(phoneRegexp).messages({
        "string.empty": `phone cannot be an empty field`,
    }),
});

module.exports = {
    contactsAddSchema,
    contactsUpdate,
};
