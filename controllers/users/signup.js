const { Conflict } = require("http-errors");
const { User } = require("../../models");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const user = await User.findOne({ email });
  const avatarURL = gravatar.url(email);
  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = new User({ email, subscription, avatarURL });
  newUser.setPassword(password);
  newUser.save();

  res.json({
    status: "success",
    code: 201,
    message: "user created",
    data: {
      user: {
        email,
        subscription: newUser.subscription,
        avatarURL,
      },
    },
  });
};

module.exports = signup;
