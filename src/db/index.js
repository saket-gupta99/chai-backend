import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { config } from "../utils/configs.js";

export default async function connectToDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${config.databaseURL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("Error connecting to DB: ", err.message);
    process.exit(1);
  }
}
