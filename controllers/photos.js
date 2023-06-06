const photos = require("../models/photos");

const { HttpErorr, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
    const result = await photos.getAll();
    res.json(result);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const result = await photos.getById(id);
    if (!result) {
      throw HttpErorr(404, "Not found");
    }
    res.json(result);
 };

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
};