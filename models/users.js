const { Schema, model } = require("mongoose");

const { emailRegexp } = require("../values/patterns");

const usersSchema = new Schema(
    {
        password: {
            type: String,
            required: [true, "Set password for user"],
        },
        email: {
            type: String,
            match: emailRegexp,
            required: [true, "Email is required"],
            unique: true,
        },
        subscription: {
            type: String,
            enum: ["starter", "pro", "business"],
            default: "starter",
        },
        token: String,
    },
    { versionKey: false, timestamps: true }
);

const User = model("user", usersSchema);

module.exports = User;
