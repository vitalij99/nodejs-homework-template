const User = require("../../models/users");

const register = async (req, res) => {
    const result = await User.create(req.body);

    res.json(result);
};

module.exports = register;
