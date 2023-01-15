const express = require("express");

const { auth, validation, cntrlWrapper } = require("../../middlewares");

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

router.get("/", auth, cntrlWrapper(getContacts));
router.get("/:id", auth, cntrlWrapper(getContactById));
router.delete("/:id", auth, cntrlWrapper(deleteContact));

router.post("/", auth, contactCreateValidation, cntrlWrapper(addNewContact));

router.put("/:id", auth, contactUpdateValidation, cntrlWrapper(updateContact));
router.patch(
  "/:id/favorite",
  auth,
  contactFavoriteValidation,
  cntrlWrapper(updateContactFavorite)
);

module.exports = router;
