import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export default async function connectToDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected!!! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("Error connecting to DB: ", err.message);
    process.exit(1);
  }
}
