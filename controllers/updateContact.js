const Contact = require("../models/contacts");
const { HttpError } = require("../helpers");

const updateContact = async (req, res) => {
    const { contactId } = req.params;

    if (!contactId || Object.keys(req.body).length === 0) {
        throw HttpError(400, "missing fields");
    }

    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });

    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found`);
    }

    res.json(result);
};

module.exports = updateContact;
