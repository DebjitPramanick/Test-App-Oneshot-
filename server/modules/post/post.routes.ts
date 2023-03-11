import { isAuth } from "../../middlewares/auth"
import { createPostController, deletePostController, getAllPostsController, getPostByIDController, searchPostsByController, updatePostController } from "./post.controllers"
import express from 'express'

const postRouter = express.Router()

postRouter.post("/create", isAuth, createPostController)
postRouter.get("/all", getAllPostsController)
postRouter.get("/search", isAuth, searchPostsByController)
postRouter.get("/:id", isAuth, getPostByIDController)
postRouter.put("/update/:id/:user", isAuth, updatePostController)
postRouter.delete("/delete/:id/:user", isAuth, deletePostController)

export default postRouter