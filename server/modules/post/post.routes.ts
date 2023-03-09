import { isAuth } from "../../middlewares/auth"
import { createPostController, deletePostController, getAllPostsController, getPostByIDController } from "./post.controllers"
const express = require('express')

const postRouter = express.Router()

postRouter.post("/create", isAuth, createPostController)
postRouter.get("/all", getAllPostsController)
postRouter.get("/:id", isAuth, getPostByIDController)
postRouter.delete("/delete/:id", isAuth, deletePostController)

export default postRouter