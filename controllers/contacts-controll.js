const contactsServis = require("../models/contacts");
const { ctrlWrapper } = require("../decorators");
const { HttpError } = require("../helpers/HttpError");

const getListContacts = async (req, res) => {
    const result = await contactsServis.getListContacts();
    res.json(result);
};

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contactsServis.getContactById(contactId);

    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found`);
    }
    res.json(result);
};

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await contactsServis.removeContact(contactId);
    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found`);
    }

    res.json(result);
};

const addContact = async (req, res) => {
    const result = await contactsServis.addContact(req.body);

    res.status(201).json(result);
};

const updateContact = async (req, res) => {
    const { contactId } = req.params;

    if (!contactId || Object.keys(req.body).length === 0) {
        throw HttpError(400, "missing fields");
    }

    const result = await contactsServis.updateContact(contactId, req.body);

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
