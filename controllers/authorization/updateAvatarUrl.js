const fs = require("fs/promises");
const path = require("path");

const User = require("../../models/users");
const { HttpError } = require("../../helpers");

const avatarsDir = path.resolve("public", "avatars");
const publicDir = path.resolve("public");

const updateAvatarUrl = async (req, res) => {
    const { _id: id } = req.user;
    const { path: oldPath, filename } = req.file;

    const { avatarURL: oldAvatar } = await User.findById(id);

    if (oldAvatar.includes("avatars")) {
        const oldAvatarFile = path.join(publicDir, oldAvatar);

        fs.unlink(oldAvatarFile);
    }

    const newPath = path.join(avatarsDir, filename);
    const avatarURL = path.join("avatars", filename);

    await fs.rename(oldPath, newPath);

    const result = await User.findByIdAndUpdate(
        id,
        { avatarURL },
        {
            new: true,
        }
    );

    if (!result) {
        throw HttpError(404);
    }

    res.json(result);
};

module.exports = updateAvatarUrl;
