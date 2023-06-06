const { Schema, model } = require("mongoose");

const photoSchema = new Schema({
  category: String,
  name: String,
  urlMin: String,
  url: String,
});

const Photo = model("photo", photoSchema);

module.exports = Photo;