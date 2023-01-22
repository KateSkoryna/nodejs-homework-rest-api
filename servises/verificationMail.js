const verificationMail = (email, token) => {
  const mail = {
    to: email,
    subject: "Varification email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${token}">Confirm email</a>`,
  };

  return mail;
};

module.exports = verificationMail;
