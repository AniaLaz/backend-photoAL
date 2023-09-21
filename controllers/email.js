const { Email } = require("../models/email");

const { ctrlWrapper } = require("../helpers");


const getAll = async (req, res) => {

  const result = await Email.find();
  res.json(result);
};

 
const add = async (req, res) => {
  console.log("req.body", req.bod);
  const newPost = await Email.create({ ...req.body });
  res.status(201).json(newPost);
};


module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
};
