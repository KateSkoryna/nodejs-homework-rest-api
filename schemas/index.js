const {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
} = require("./contacts");

const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
} = require("./user");

module.exports = {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
};
