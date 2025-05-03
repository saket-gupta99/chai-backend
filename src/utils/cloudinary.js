import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

console.log( process.env.CLOUDINARY_NAME, process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadOnCloudinary(localFilePath) {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file is uploaded on cloudinary", response.url);

    return response;
  } catch (err) {
    fs.unlinkSync(localFilePath); //remove the locally stored file on server when upload fails
    console.error("cloudinary Error: ", err);
    return null;
  }
}
