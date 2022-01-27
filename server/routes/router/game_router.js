const express = require("express");
const router = express.Router();
const game_controller = require("../../controllers/game_controller");
const { upload } = require("../../helper/filehelper");

router
  .post(
    "/",
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "gameTitle", maxCount: 1 },
      { name: "title", maxCount: 1 },
      { name: "gameBody", maxCount: 1 },
      { name: "gameDate", maxCount: 1 },
    ]),
    game_controller.createData
  )
  .get("/", game_controller.readData)
  .put("/:id", game_controller.updateData)
  .delete("/:id", game_controller.deleteData);

module.exports = router;
