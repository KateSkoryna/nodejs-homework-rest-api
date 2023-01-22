const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY, SENDGRID_EMAIL } = require("../config.js");
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (mail) => {
  try {
    await sgMail.send({ from: SENDGRID_EMAIL, ...mail });
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = sendEmail;
