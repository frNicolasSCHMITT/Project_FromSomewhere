const Game = require("../models/game_schema");

const createData = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req.body.gameBody);
    const file = new Game({
      title: req.body.title,
      body: req.body.gameBody,
      date: req.body.gameDate,
      imageName: req.files.image[0].filename,
      imagePath: req.files.image[0].path,
      gameTitleName: req.files.gameTitle[0].filename,
      gameTitlePath: req.files.gameTitle[0].path,
    });
    await file.save();
    res.status(201).send("File uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const readData = (req, res) => {
  Game.find()
    .sort({ date: -1 })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const updateData = (req, res) => {
  console.log(req.body);
  Game.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log("Game updated!");
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        console.error("Error Validating!", err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteData = (req, res) => {
  Game.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error("Game not available");
      }
      return data.remove();
    })
    .then((data) => {
      console.log("Game removed!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

module.exports = {
  createData,
  readData,
  updateData,
  deleteData,
};
