const Contact = require("../models/contacts");

const getListContacts = async (req, res) => {
    const result = await Contact.find();
    res.json(result);
};

module.exports = getListContacts;
