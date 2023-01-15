const express = require("express");
const { validation, ctrllWrapper, auth, upload } = require("../../middlewares");
const {
  users: { signup, login, getCurrent, logout, updateUser, updateAvatar },
} = require("../../controllers");

const { signupUserSchema, loginUserSchema } = require("../../schemas");
const cntrlWrapper = require("../../middlewares/cntrlWrapper");
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);

router.post("/signup", userSignupValidation, ctrllWrapper(signup));
router.post("/login", userLoginValidation, ctrllWrapper(login));
router.get("/current", auth, ctrllWrapper(getCurrent));
router.post("/logout", auth, ctrllWrapper(logout));
router.patch("/users", auth, ctrllWrapper(updateUser));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  cntrlWrapper(updateAvatar)
);

module.exports = router;
