import { config } from "../utils/configs.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decode = jwt.verify(token, config.tokens.accessTokenSecret);

    const user = await User.findById(decode?._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(401, "Unauthorized access token");
    }

    req.user = user;

    next();
  } catch (err) {
    throw new ApiError(401, err?.message || "Invalid access token");
  }
});

export { verifyJWT };
