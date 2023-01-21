const {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
} = require("./contacts");

const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
} = require("./user");

module.exports = {
  createContactSchema,
  updateContactSchema,
  contactFavoriteSchema,
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
};
