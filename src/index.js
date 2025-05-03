//const dotenv = require("dotenv").config({path: "./env"})
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectToDB from "./db/index.js";
import { app } from "./app.js";




const port = process.env.PORT || 8000;

connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on: ${port}`);
    });
  })
  .catch((err) => {
    console.log("DB connection Error!!!", err);
  });
