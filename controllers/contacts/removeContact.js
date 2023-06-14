const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndDelete(contactId);
    if (!result) {
        throw HttpError(404, `Contact with ${contactId} not found`);
    }

    res.json(result);
};

module.exports = removeContact;
