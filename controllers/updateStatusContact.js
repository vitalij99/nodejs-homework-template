const Contact = require("../models/contacts");
const { HttpError } = require("../helpers/HttpError");

const updateStatusContact = async (req, res) => {
    const { contactId } = req.params;

    if (!contactId || Object.keys(req.body).length === 0) {
        throw HttpError(400, "missing fields favorite");
    }

    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);
};

module.exports = updateStatusContact;
