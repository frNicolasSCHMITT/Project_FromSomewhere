const express = require("express");
const router = express.Router();
const mail_controller = require("../../controllers/mail_controller");

router.post("/", mail_controller.createData);

module.exports = router;
