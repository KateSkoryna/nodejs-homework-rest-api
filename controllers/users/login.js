const { Unauthorized } = require("http-errors");
const { User } = require("../../models");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../../config.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user.verify);
  if (!user || !user.verify || !user.comparePassword(password)) {
    throw new Unauthorized("Email or password is wrong, or not verified");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  res.json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        email,
      },
    },
  });
};

module.exports = login;
