const Press = require("../models/press_schema");

const createData = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req.body.title);
    const file = new Press({
      title: req.body.title,
      body: req.body.pressBody,
      excerpt: req.body.pressExcerpt,
      date: req.body.pressDate,
      imageName: req.files.image[0].filename,
      imagePath: req.files.image[0].path,
    });
    await file.save();
    res.status(201).send("File uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// const createData = (req, res) => {
//   console.log(req.body);
//   Press.create(req.body)
//     .then((data) => {
//       console.log("New Press Created!", data);
//       res.status(201).json(data);
//     })
//     .catch((err) => {
//       if (err.name === "ValidationError") {
//         console.error("Error Validating!", err);
//         res.status(422).json(err);
//       } else {
//         console.error(err);
//         res.status(500).json(err);
//       }
//     });
// };

const readData = (req, res) => {
  Press.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const updateData = (req, res) => {
  Press.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log("Press updated!");
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
  Press.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error("Press not available");
      }
      return data.remove();
    })
    .then((data) => {
      console.log("Press removed!");
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
