const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailSchema = new Schema({
  text: {
    type: String,
    required: [true, "write the text of the letter"],
  },
  phone: {
    type: String,
    required: [true, "write your phone number"],
  },
  email: {
    type: String,
    required: [true, "write your e-mail"],
  },
});

const addSchema = Joi.object({
  text: Joi.string().min(10).required(),
  phone: Joi.string().min(10).required(),
  email: Joi.string().min(7).required(),
});

const schemas = {
  addSchema,
};

const Email = model("email", emailSchema);

module.exports = { Email, schemas };
