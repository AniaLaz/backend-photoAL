const express = require("express");
const controllers = require("../../controllers/email");
const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/email");

const router = express.Router(); // створюємо сторінку веб-сервер

router.get("/", controllers.getAll);
router.post("/", validateBody(schemas.addSchema), controllers.add);



module.exports = router;
