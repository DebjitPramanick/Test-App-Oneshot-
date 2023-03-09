import mongoose from "mongoose";
import { MONGO_URI, DB_NAME } from "../constants";
import logger from "../utils/logger.util";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            dbName: DB_NAME
        })
        logger.info("DB is connected successfully")
    } catch (error) {
        logger.error(error, "Error connecting DB.")
        process.exit(1)
    }
}