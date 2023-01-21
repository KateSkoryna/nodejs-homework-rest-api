const express = require("express");

const { auth, validation, controllerlWrapper } = require("../../middlewares");

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

router.get("/", auth, controllerlWrapper(getContacts));
router.get("/:id", auth, controllerlWrapper(getContactById));
router.delete("/:id", auth, controllerlWrapper(deleteContact));

router.post(
  "/",
  auth,
  contactCreateValidation,
  controllerlWrapper(addNewContact)
);

router.put(
  "/:id",
  auth,
  contactUpdateValidation,
  controllerlWrapper(updateContact)
);
router.patch(
  "/:id/favorite",
  auth,
  contactFavoriteValidation,
  controllerlWrapper(updateContactFavorite)
);

module.exports = router;
