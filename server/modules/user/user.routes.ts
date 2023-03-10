import { isAuth } from "../../middlewares/auth"
import { checkUserByEmailController, createUserController, deleteUserController, getUserByIDController, loginUserController } from "./user.controllers"
import express from 'express'

const userRouter = express.Router()

userRouter.post("/create", createUserController)
userRouter.post("/login", loginUserController)
userRouter.post("/check", checkUserByEmailController)
userRouter.get("/:id", isAuth, getUserByIDController)
userRouter.delete("/delete/:id", isAuth, deleteUserController)

export default userRouter