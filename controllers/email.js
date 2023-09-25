const { Email } = require("../models/email");

const { ctrlWrapper } = require("../helpers");


const getAll = async (req, res) => {

  const result = await Email.find();
  res.json(result);
};

 
const add = async (req, res) => {
  console.log("req.body", req.body);
    
  const newPost = await Email.create({ ...req.body });
  res.status(201).json(newPost);
};

const deleteById = async (req, res, next) => {
  const contactDelete = await Email.findOneAndRemove({
    _id: req.params.id,
  });
  if (!contactDelete) {
    throw HttpErorr(404, "not found");
  } else {
    res.json({ message: "contact deleted", status: "200" });
  }
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
};
