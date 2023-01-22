const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = require("../config.js");
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (mail) => {
  try {
    await sgMail.send({ from: "k.skoryna@gmail.com", ...mail });
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
