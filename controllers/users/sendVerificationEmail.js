const { User } = require("../../models");
const { sendEmail } = require("../../helpers");
const { BadRequest, NotFound } = require("http-errors");
const { verificationMail } = require("../../servises");

const sendVerificationEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  const userToken = user.verificationToken;

  const mail = verificationMail(email, userToken);
  await sendEmail(mail);

  res.json({
    message: "Verification email sent",
    code: 200,
  });
};

module.exports = sendVerificationEmail;
