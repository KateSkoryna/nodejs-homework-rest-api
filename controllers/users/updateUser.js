const { User } = require("../../models");

const updateUser = async (req, res) => {
  const { _id } = req.user;
  const { email, password, subscription } = req.body;
  const newUser = new User({
    email,
    subscription,
  });
  newUser.setPassword(password);
  newUser.save();
  const result = await User.findByIdAndUpdate(_id, { ...newUser });
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};
module.exports = updateUser;
