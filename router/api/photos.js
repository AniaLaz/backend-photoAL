const express = require("express");
// const photos = require("../../photos/photos.json");
const photos = require("../../models/photos")

const { HttpErorr } = require("../../helpers")

const router = express.Router(); // створюємо сторінку веб-сервер

router.get("/", async (req, res) => {
  try {
      const result = await photos.getAll();
      res.json(result);
  } catch (error) {
next(error);
  }

});

router.get("/:id", async (req, res, next) => {
  try {
       const { id } = req.params;
    const result = await photos.getById(id);
    if (!result) {
      throw HttpErorr(404, "Not found");
      // const error = new Error("Not found");
      // error.status = 404;
      // throw error;
    }
      res.json(result);
  } catch (error) {
next(error)
  }

});

module.exports = router;
