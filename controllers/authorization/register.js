const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const User = require("../../models/users");
const { HttpError, sendEmail } = require("../../helpers");
const { nanoid } = require("nanoid");
const { SERVER_URL } = process.env;

const register = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use");
    }

    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);

    const verificationToken = nanoid();

    const newUser = await User.create({
        ...req.body,
        avatarURL,
        password: hashPassword,
        verificationToken,
    });

    const verifyMail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${SERVER_URL}/api/users/verity/${user.verificationToken}" >Click to verify</a>`,
    };

    await sendEmail(verifyMail);

    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    });
};

module.exports = register;
