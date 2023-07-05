const express = require("express");
const controllers = require("../../controllers/photos");
const { schemas } = require("../../models/photo")
const { validateBody } = require("../../middlewares");


const router = express.Router(); // створюємо сторінку веб-сервер

router.get("/", controllers.getAll);

router.get("/:id", controllers.getById);

router.post("/", validateBody(schemas.addSchema), controllers.add);

router.delete("/:id", controllers.deleteById);

module.exports = router;
