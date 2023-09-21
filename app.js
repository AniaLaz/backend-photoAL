const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const dotenv = require("dotenv");

const photosRouter = require("./router/api/photos");
const emailRouter = require("./router/api/email");

dotenv.config();
const app = express(); // app - веб-сервер

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/photos", photosRouter);
app.use("/api/emails", emailRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
}); //midelvar виконається для любого запиту
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


module.exports = app;


// npm run start:dev

