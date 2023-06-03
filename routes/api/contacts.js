const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers/contacts-controll");
const schemas = require("../../schemas/contacts");
const { validateBody } = require("../../decorators");

router.get("/", contactsController.getListContacts);

router.get("/:contactId", contactsController.getContactById);

router.post(
    "/",
    validateBody(schemas.contactsAddSchema),
    contactsController.addContact
);

router.delete("/:contactId", contactsController.removeContact);

router.put(
    "/:contactId",
    validateBody(schemas.contactsUpdate),
    contactsController.updateContact
);

module.exports = router;
