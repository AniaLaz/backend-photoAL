const { Schema, model } = require("mongoose");
const Joi = require("joi");

const photoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Set name for post"],
  },
  body: {
    type: String,
  },
  category: {
    type: String,
    default: "all",
  },
  urlMin: {
    type: String
  },
  url: {
    type: String
  },
});

const addSchema = Joi.object({
  title: Joi.string().alphanum().min(3).max(30).required(),
  body: Joi.string().min(20).required(),
  category: Joi.string().alphanum().min(3).max(10).required(),
  urlMin: Joi.string(),
  url: Joi.string(),
});


const schemas = {
  addSchema,
};

const Photo = model("photo", photoSchema);

module.exports = { Photo, schemas };