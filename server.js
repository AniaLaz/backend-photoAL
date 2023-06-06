const mongoose = require("mongoose");
const app = require("./app");

const { DB_HOST, PORT = 3001 } = process.env;
  
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => console.log("server start"));
  })
  .catch((err) => {
    console.log(err.massege);
    process.exit(1);
  });

// npm run start:dev
