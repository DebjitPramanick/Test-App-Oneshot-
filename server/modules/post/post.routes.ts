import { isAuth } from "../../middlewares/auth"
import { createPostController, deletePostController, getAllPostsController, getPostByIDController, getPostsByTitleController } from "./post.controllers"
import express from 'express'

const postRouter = express.Router()

postRouter.post("/create", isAuth, createPostController)
postRouter.get("/all", getAllPostsController)
postRouter.get("/search", isAuth, getPostsByTitleController)
postRouter.get("/:id", isAuth, getPostByIDController)
postRouter.delete("/delete/:id", isAuth, deletePostController)

export default postRouter