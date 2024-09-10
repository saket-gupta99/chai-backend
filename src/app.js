import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//how much requests can be made to server
app.use(express.json({ limit: "16kb" }));
//data can come from url also.sometime in url %,+,etc. symbols can appear. we're just decoding it
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
//to store pdf files,etc. in public folder that comes from server
app.use(express.static("public"));
app.use(cookieParser());
