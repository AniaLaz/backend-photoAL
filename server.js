const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://ania:ania123@cluster0.lkyftbb.mongodb.net/anna_backend?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3001, () => console.log("server start"));
  })
  .catch((err) => {
    console.log(err.massege);
    process.exit(1);
  });

// npm run start:dev
