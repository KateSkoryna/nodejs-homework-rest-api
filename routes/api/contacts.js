const express = require("express");

const { auth, validation, controllerWrapper } = require("../../middlewares");

const {
  contacts: {
    getContacts,
    getContactById,
    addNewContact,
    deleteContact,
    updateContact,
    updateContactFavorite,
  },
} = require("../../controllers");

const {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
} = require("../../schemas");

const contactCreateValidation = validation(createContactSchema);
const contactUpdateValidation = validation(updateContactSchema);
const contactFavoriteValidation = validation(contactFavoriteSchema);
const router = express.Router();

router.get("/", auth, controllerWrapper(getContacts));
router.get("/:id", auth, controllerWrapper(getContactById));
router.delete("/:id", auth, controllerWrapper(deleteContact));

router.post(
  "/",
  auth,
  contactCreateValidation,
  controllerWrapper(addNewContact)
);

router.put(
  "/:id",
  auth,
  contactUpdateValidation,
  controllerWrapper(updateContact)
);
router.patch(
  "/:id/favorite",
  auth,
  contactFavoriteValidation,
  controllerWrapper(updateContactFavorite)
);

module.exports = router;
