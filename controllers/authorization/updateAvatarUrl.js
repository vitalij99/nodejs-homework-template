const Contact = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const updateAvatarUrl = async (req, res) => {
    const { _id: id } = req.user;
    const { avatarURL } = req.body;

    const result = await Contact.findByIdAndUpdate(id, avatarURL, {
        new: true,
    });

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);
};

module.exports = updateAvatarUrl;
