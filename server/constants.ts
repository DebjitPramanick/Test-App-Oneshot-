const dotenv = require('dotenv')
dotenv.config()

export const CROSS_ORIGIN = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : process.env.CROSS_ORIGIN

export const SECRET_KEY = process.env.JWT_SECRET_KEY || "SECRET"

export const TOKEN_EXP = '24h'

export const PORT = process.env.PORT || 8080

export const MONGO_URI = process.env.MONGO_URI || ""

export const DB_NAME = process.env.DATABASE_NAME || "";

export const ENV = process.env.NODE_ENV