const express = require("express");
const router = express.Router();
const press_controller = require("../../controllers/press_controller");
const { upload } = require("../../helper/filehelper");

router
  .post(
    "/",
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "pressExcerpt", maxCount: 1 },
      { name: "title", maxCount: 1 },
      { name: "pressBody", maxCount: 1 },
      { name: "pressDate", maxCount: 1 },
    ]),
    press_controller.createData
  )
  .get("/", press_controller.readData)
  .put("/:id", press_controller.updateData)
  .delete("/:id", press_controller.deleteData);

module.exports = router;
