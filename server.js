const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
    "mongodb+srv://vitalisklymko:jmC9BcU1GufBUCOe@cluster0.jrzm3tg.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
    .connect(DB_HOST)
    .then(() => {
        app.listen(3000, () => {
            console.log("Database connection successful");
        });
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });
