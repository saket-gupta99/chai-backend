import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { config } from "../utils/configs.js";

cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});

async function uploadOnCloudinary(localFilePath) {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // console.log("file is uploaded on cloudinary", response.url);
    fs.unlinkSync(localFilePath);

    return response;
  } catch (err) {
    fs.unlinkSync(localFilePath); //remove the locally stored file on server when upload fails
    console.error("cloudinary Error: ", err);
    return null;
  }
}

export async function deleteFromCloudinary(publicId) {
  if (!publicId) return;
  try {
    await cloudinary.uploader.destroy(publicId);
    // console.log("Previous avatar/coverImage deleted");
  } catch (error) {
    console.error("Failed to delete old avatar/coverImage:", error);
  }
}


export { uploadOnCloudinary };
