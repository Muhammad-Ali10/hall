import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import env from "../config/env.js";

export const generateTokens = async ({ _id, role }) => {
  const accessToken = jwt.sign({ _id, role }, env.accessTokenSecret, { expiresIn: env.accessExpiry });
  const refreshTokenRaw = jwt.sign({ _id, role }, env.refreshTokenSecret, { expiresIn: env.refreshExpiry });
  const hashedRefresh = await bcrypt.hash(refreshTokenRaw, 10);
  return { accessToken, refreshToken: refreshTokenRaw, hashedRefresh };
};

export const verifyAccessToken = (token) => jwt.verify(token, env.accessTokenSecret);
export const verifyRefreshToken = (token) => jwt.verify(token, env.refreshTokenSecret);
