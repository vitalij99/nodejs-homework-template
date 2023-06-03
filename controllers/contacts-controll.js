const Contact = require("../models/contacts");

const { ctrlWrapper } = require("../decorators");
const { HttpError } = require("../helpers/HttpError");

const getListContacts = async (req, res) => {
    const result = await Contact.find();
    res.json(result);
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);

    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found`);
    }
    res.json(result);
};

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found`);
    }

    res.json(result);
};

const addContact = async (req, res) => {
    const result = await Contact.create(req.body);

    res.status(201).json(result);
};

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

module.exports = {
    getListContacts: ctrlWrapper(getListContacts),
    getContactById: ctrlWrapper(getContactById),
    removeContact: ctrlWrapper(removeContact),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
};
