import { json, Request, Response } from "express";
import { CROSS_ORIGIN, PORT } from "./constants";
import { connectDB } from "./helpers/db.helper";
import postRouter from "./modules/post/post.routes";
import userRouter from "./modules/user/user.routes";
import logger from "./utils/logger.util";
import express from "express";
import cors from 'cors';

const app = express()
app.use(cors({
    origin: CROSS_ORIGIN,
}))
app.use(json())

connectDB()

app.use("/api/user", userRouter)
app.use("/api/post", postRouter)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Server is running."
    })
})

app.listen(PORT, () => {
    logger.info("Server is running")
})