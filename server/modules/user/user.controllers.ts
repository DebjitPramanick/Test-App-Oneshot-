import { Request, Response } from "express";
import { generateToken, createUserHelper, getUserHelper, deleteUserHelper } from "./user.helpers";
import logger from "../../utils/logger.util";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const { img, name, email, isAdmin } = req.body;

        const data = {
            profile_pic: img,
            name: name,
            email: email,
            isAdmin: isAdmin
        }
        const user: any = await createUserHelper(data);
        const accessToken = await generateToken({
            userId: user._id,
            email: user.email,
            isAdmin: false
        });

        logger.info(`Registered user successfully with ID: ${user._id}`)

        res.status(201).json({
            message: "You are registered successfully.",
            token: accessToken,
            user: user
        });

    } catch (error) {
        logger.error(error, "Error creating user")
        res.status(500).json({
            message: 'Failed to register. Try again after sometime.'
        })
    }
}

export const getUserByIDController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: any = await getUserHelper(id);

        if (!user) {
            logger.info(`No user found with ID: ${id}`)
            res.status(404).json({ message: "User not found." });
            return;
        }

        logger.info(`Found user successfully with ID: ${user._id}`)

        res.status(201).json({
            message: "User found.",
            user: user
        });
    } catch (error) {
        logger.error(error, "Error getting user")
        res.status(500).json({
            message: 'Failed to fetch user data. Try again after sometime.'
        })
    }
}

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteUserHelper(id);

        logger.info(`Deleted user data successfully with ID: ${id}`)

        res.status(200).json({ message: "User account deleted." });

    } catch (error) {
        logger.error(error, "Error deleting user")
        res.status(500).json({
            message: 'Failed to delete user data. Try again after sometime.'
        })
    }
}