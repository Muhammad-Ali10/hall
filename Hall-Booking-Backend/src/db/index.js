import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


export const DBConnect = async () => {

    console.log(DB_NAME)

    try {
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
            serverSelectionTimeoutMS: 10000
        })
        console.log("connected to database", ConnectionInstance.connection.host)
    } catch (error) {
        console.log("DB Connection Faild", error)
        process.exit(1)
    }

}