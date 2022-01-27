const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});
transporter.verify(function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take our message");
  }
});

const createData = (req, res) => {
  let from = req.body.from;
  let subject = req.body.subject;
  let content = req.body.content;

  const mail = {
    from: from,
    to: process.env.EMAIL,
    subject: subject,
    html: '<p style="font-size:25px">' + content + "</p><br>" + from,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err);
      // res.status(500).send("Something went wrong."); éviter le status 500, peut faire cracher la page
      res.status(200).json({
        msg: "Une erreur est survenue, merci de rééssayer plus tard.",
      });
    } else {
      // console.log("hilo");
      res.status(200).json({
        msg: "OK",
      });
    }
  });
};

module.exports = {
  createData,
};
