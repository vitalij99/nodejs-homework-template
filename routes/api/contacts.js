const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers/contacts");
const schemas = require("../../schemas/contacts");
const { validateBody } = require("../../decorators");
const { isValidId } = require("../../middlewares");

router.get("/", contactsController.getListContacts);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post(
    "/",
    validateBody(schemas.contactsAddSchema),
    contactsController.addContact
);

router.delete("/:contactId", isValidId, contactsController.removeContact);

router.put(
    "/:contactId",
    isValidId,
    validateBody(schemas.contactsUpdate),
    contactsController.updateContact
);

router.patch(
    "/:contactId/favorite",
    isValidId,
    validateBody(schemas.contactsUpdateFavotite),
    contactsController.updateStatusContact
);
module.exports = router;
