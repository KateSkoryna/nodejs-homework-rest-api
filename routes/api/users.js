const express = require("express");
const {
  validation,
  controllerWrapper,
  auth,
  upload,
} = require("../../middlewares");
const {
  users: {
    signup,
    login,
    getCurrent,
    logout,
    updateUser,
    updateAvatar,
    verifyEmail,
    sendVerificationEmail,
  },
} = require("../../controllers");

const {
  signupUserSchema,
  loginUserSchema,
  updateUserSchema,
  verifyEmailSchema,
} = require("../../schemas");
const router = express.Router();

const userSignupValidation = validation(signupUserSchema);
const userLoginValidation = validation(loginUserSchema);
const userUpdateValidation = validation(updateUserSchema);
const userMailValidation = validation(verifyEmailSchema);

router.post("/signup", userSignupValidation, controllerWrapper(signup));
router.post("/login", userLoginValidation, controllerWrapper(login));
router.get("/current", auth, controllerWrapper(getCurrent));
router.post("/logout", auth, controllerWrapper(logout));
router.patch(
  "/users",
  auth,
  userUpdateValidation,
  controllerWrapper(updateUser)
);
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  controllerWrapper(updateAvatar)
);
router.get("/verify/:verificationToken", controllerWrapper(verifyEmail));
router.post(
  "/verify",
  userMailValidation,
  controllerWrapper(sendVerificationEmail)
);

module.exports = router;
