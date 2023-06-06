const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const photosRouter = require("./router/api/photos");

const app = express(); // app - веб-сервер



// app.use((req, res, next) => {
//     console.log("fiorst midelvar");
//     next();
// }) //midelvar виконається для любого запиту
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use("/api/photos", photosRouter);
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

