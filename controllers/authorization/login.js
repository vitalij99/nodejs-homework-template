const User = require("../../models/users");

const login = async (req, res) => {
    const { email, password } = req.body;

    const result = await User.find({ email });

    res.json(result);
};

module.exports = login;
