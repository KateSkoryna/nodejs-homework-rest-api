const express = require("express");
const { validation, cntrlWrapper, auth, upload } = require("../../middlewares");
const {
  users: { signup, login, getCurrent, logout, updateUser, updateAvatar },
} = require("../../controllers");

const { signupUserSchema, loginUserSchema } = require("../../schemas");
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);

router.post("/signup", userSignupValidation, cntrlWrapper(signup));
router.post("/login", userLoginValidation, cntrlWrapper(login));
router.get("/current", auth, cntrlWrapper(getCurrent));
router.post("/logout", auth, cntrlWrapper(logout));
router.patch("/users", auth, cntrlWrapper(updateUser));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  cntrlWrapper(updateAvatar)
);

module.exports = router;
