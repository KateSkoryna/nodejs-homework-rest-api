const { Conflict } = require("http-errors");
const { User } = require("../../models");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const { sendEmail } = require("../../helpers");
const { verificationMail } = require("../../servises");

const signup = async (req, res) => {
  const { email, password, subscription } = req.body;
  const avatarURL = gravatar.url(email);
  const verificationToken = uuidv4();
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const newUser = new User({
    email,
    subscription,
    avatarURL,
    verificationToken,
  });
  newUser.setPassword(password);
  newUser.save();

  const mail = verificationMail(email, verificationToken);
  await sendEmail(mail);

  res.json({
    status: "success",
    code: 201,
    message: "user created",
    data: {
      user: {
        email,
        subscription: newUser.subscription,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = signup;
