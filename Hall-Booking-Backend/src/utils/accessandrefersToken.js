import bcrypt from "bcrypt";
import { Hall } from "../models/hall.model.js";

const generateAccessTokenandRefreshToken = async (hallid) => {

    const hall = await Hall.findById(hallid);

    if (!hall) {
        throw new Error("hall not found");
    }

    const accessToken = await hall.generateAccessToken(hall);
    
    const refreshToken = await hall.generateRefreshToken(hall);
    
    const bcryptRefreshToken = await bcrypt.hash(refreshToken, 10);

    hall.refreshToken = bcryptRefreshToken;

    await hall.save({ validateBeforeSave: true });

    return { accessToken, refreshToken };

}   

export { generateAccessTokenandRefreshToken };