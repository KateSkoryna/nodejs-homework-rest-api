const express = require("express");
const {
  validation,
  controllerlWrapper,
  auth,
  upload,
} = require("../../middlewares");
const {
  users: { signup, login, getCurrent, logout, updateUser, updateAvatar },
} = require("../../controllers");

const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
} = require("../../schemas");
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);
const userUpdateValidation = validation(updateUserSchema);

router.post("/signup", userSignupValidation, controllerlWrapper(signup));
router.post("/login", userLoginValidation, controllerlWrapper(login));
router.get("/current", auth, controllerlWrapper(getCurrent));
router.post("/logout", auth, controllerlWrapper(logout));
router.patch(
  "/users",
  auth,
  userUpdateValidation,
  controllerlWrapper(updateUser)
);
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controllerlWrapper(updateAvatar)
);

module.exports = router;
