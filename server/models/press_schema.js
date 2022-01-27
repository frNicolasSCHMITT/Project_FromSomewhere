const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pressSchema = new Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
  },
  imageName: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: [true, "excerpt field is required"],
  },
  body: {
    type: String,
    required: [true, "body field is required"],
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Press = mongoose.model("Press", pressSchema, "press");
module.exports = Press;
