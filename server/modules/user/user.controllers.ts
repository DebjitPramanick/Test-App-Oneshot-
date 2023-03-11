import { Request, Response } from "express";
import { generateToken, createUserHelper, getUserHelper, deleteUserHelper, getUserByEmailHelper, loginUserHelper, searchUsersHelper } from "./user.helpers";
import logger from "../../utils/logger.util";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const { profile_pic, name, email, isAdmin } = req.body;

        const data = {
            profile_pic: profile_pic,
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

export const checkUserByEmailController = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user: any = await getUserByEmailHelper(email);

        if (!user) {
            res.status(200).json({
                message: "User does not exist.",
                exists: 0,
                userId: null
            });
            return;
        }

        logger.info(`Found user successfully with email: ${email}`)

        res.status(200).json({
            message: "User exists with this email. Try another email.",
            exists: 1,
            userId: user._id
        });
    } catch (error) {
        logger.error(error, "Error finding user with email")
        res.status(500).json({
            message: 'Failed to check if user exists. Try again after sometime.'
        })
    }
}

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const { userId } = req.body;
        const user: any = await loginUserHelper(userId);

        const accessToken = await generateToken({
            userId: user._id,
            email: user.email,
            isAdmin: false
        });

        logger.info(`Found user successfully with ID: ${user._id}`)

        res.status(200).json({
            message: "User found.",
            token: accessToken,
            user: user
        });
    } catch (error) {
        logger.error(error, "Error getting user")
        res.status(500).json({
            message: 'Failed to fetch user data. Try again after sometime.'
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

        res.status(200).json({
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

export const searchUsersController = async (req: Request, res: Response) => {
    try {
        const { name }: any = req.query;
        const data: {users: any[], count: number} = await searchUsersHelper(name);

        logger.info(`Fetched users whose names include: ${name}`)

        res.status(200).json({
            message: "Users found.",
            users: data.users,
            total: data.count
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