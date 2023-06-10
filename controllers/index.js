const { ctrlWrapper } = require("../decorators");

const getListContacts = require("./getListContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
    getListContacts: ctrlWrapper(getListContacts),
    getContactById: ctrlWrapper(getContactById),
    removeContact: ctrlWrapper(removeContact),
    addContact: ctrlWrapper(addContact),
    updateContact: ctrlWrapper(updateContact),
    updateStatusContact: ctrlWrapper(updateStatusContact),
};
