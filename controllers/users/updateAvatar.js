const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const userId = req.user._id;
  const avatarName = `${userId}_${originalname}`;

  try {
    const resultUpload = path.join(avatarDir, avatarName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", avatarName);
    Jimp.read(resultUpload).then((avatar) => {
      return avatar.resize(250, Jimp.AUTO).write(resultUpload);
    });
    await User.findByIdAndUpdate(userId, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(tempUpload);
  }
};

module.exports = updateAvatar;
