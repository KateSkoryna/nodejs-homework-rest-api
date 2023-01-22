const { User } = require("../../models");
const { NotFound } = require("http-errors");

const verifyEmail = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new NotFound();
  }

  const userId = user._id;
  await User.findByIdAndUpdate(userId, {
    verify: true,
    verificationToken: null,
  });

  res.json({
    message: "Verification successful",
    code: 200,
  });
};

module.exports = verifyEmail;
