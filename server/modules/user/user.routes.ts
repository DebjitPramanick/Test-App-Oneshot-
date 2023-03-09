import { isAuth } from "../../middlewares/auth"
import { createUserController, deleteUserController, getUserByIDController } from "./user.controller"
const express = require('express')

const userRouter = express.Router()

userRouter.post("/create", createUserController)
userRouter.get("/:id", isAuth, getUserByIDController)
userRouter.delete("/delete/:id", isAuth, deleteUserController)

export default userRouter