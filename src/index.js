import { config } from "./utils/configs.js";
import connectToDB from "./db/index.js";
import { app } from "./app.js";

connectToDB()
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server is running on: ${config.port}`);
    });
  })
  .catch((err) => {
    console.log("DB connection Error!!!", err);
  });
