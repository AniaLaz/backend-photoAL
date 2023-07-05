const {Photo} = require("../models/photo");

const { HttpErorr, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const { page = 1, limit = 3 } = req.query;
  console.log(page);
  const skip = (page - 1) * limit;
  
  const result = await Photo.find({},"",{
      skip,
      limit,
    });
  res.json(result);

};

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Photo.findOne({ _id: id });
    if (!result) {
      throw HttpErorr(404, "Not found");
    }
    res.json(result);
};
 
const add = async (req, res) => {
  console.log("req.body", req.bod);
  const newPost = await Photo.create({ ...req.body });
  res.status(201).json(newPost);
};

const deleteById = async (req, res, next) => {
   const contactDelete = await Photo.findOneAndRemove({
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
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  deleteById: ctrlWrapper(deleteById),
};