//const dotenv = require("dotenv").config({path: "./.env"})

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Go up two levels from utils to the project root
const rootDir = path.resolve(__dirname, "../..");

// Load environment variables
dotenv.config({
  path: path.join(rootDir, ".env"),
});

// Export environment variables
export const config = {
  cloudinary: {
    name: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
  port: process.env.PORT || 8000,
  databaseURL: process.env.DATABASE_URL,
  corsOrigin: process.env.CORS_ORIGIN,
  tokens: {
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
  },
};
