const express = require("express");
const controllers= require("../../controllers/photos")

const router = express.Router(); // створюємо сторінку веб-сервер

router.get("/", controllers.getAll);

router.get("/:id", controllers.getById);

module.exports = router;
