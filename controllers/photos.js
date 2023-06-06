const Photo = require("../models/photo");

const { HttpErorr, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
    const result = await Photo.find();
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

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};