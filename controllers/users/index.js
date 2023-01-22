const signup = require("./signup");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateUser = require("./updateUser");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const sendVerificationEmail = require("./sendVerificationEmail");

module.exports = {
  signup,
  login,
  getCurrent,
  logout,
  updateUser,
  updateAvatar,
  verifyEmail,
  sendVerificationEmail,
};
