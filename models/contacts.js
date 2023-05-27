const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const updateContacts = async (contacts) =>
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

/**
 *
 * @returns {Object}
 */
const getListContacts = async () => {
    return JSON.parse(await fs.readFile(contactsPath));
};

/**
 * @param {String} contactId
 * @returns {Array}
 */
const getContactById = async (contactId) => {
    const data = await getListContacts();

    const result = data.filter((ele) => ele.id === contactId);

    if (result.length === 0) {
        return null;
    } else {
        return result;
    }
};

/**
 * @param {String} contactId
 * @returns {String}
 */
const removeContact = async (contactId) => {
    const data = await getListContacts();

    const newContacts = data.filter((ele) => ele.id !== contactId);
    const contact = data.filter((ele) => ele.id === contactId);

    await updateContacts(newContacts);

    return contact;
};

/**
 * @param {Object} body
 * @returns {Object}
 */
const addContact = async (body) => {
    const data = await getListContacts();
    const user = {
        id: nanoid(),
        ...body,
    };

    data.push(user);
    await updateContacts(data);

    return user;
};

const updateContact = async (contactId, body) => {
    const data = await getListContacts();
    const index = data.findIndex((ele) => ele.id === contactId);

    if (index === -1) {
        return null;
    }

    data[index] = { ...data[index], ...body };

    await updateContacts(data);

    return data[index];
};

module.exports = {
    getListContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
};
