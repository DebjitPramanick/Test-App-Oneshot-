import { Request, Response } from "express";
import logger from "../../utils/logger.util";
import { createPostHelper, deletePostHelper, getPostHelper } from "./post.helpers";

export const createPostController = async (req: Request, res: Response) => {
    try {
        const { img, name, email, isAdmin } = req.body;

        const data = {
            profile_pic: img,
            name: name,
            email: email,
            isAdmin: isAdmin
        }
        const post: any = await createPostHelper(data);

        logger.info(`Post created successfully with ID: ${post._id}`)

        res.status(201).json({
            message: "Post created successfully.",
            post: post
        });

    } catch (error) {
        logger.error(error, "Error creating post")
        res.status(500).json({
            message: 'Failed to create. Try again after sometime.'
        })
    }
}

export const getPostByIDController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post: any = await getPostHelper(id);

        if (!post) {
            logger.info(`No post found with ID: ${id}`)
            res.status(404).json({ message: "Post not found." });
        }

        logger.info(`Found post successfully with ID: ${id}`)

        res.status(201).json({
            message: "Post found.",
            post: post
        });
    } catch (error) {
        logger.error(error, "Error getting post")
        res.status(500).json({
            message: 'Failed to fetch post data. Try again after sometime.'
        })
    }
}

export const getAllPostsController = async (req: Request, res: Response) => {
    try {
        const {page} = req.params;

        const posts: any = await getPostHelper(undefined, Number(page));

        logger.info(`Fetched all posts`)

        res.status(201).json({
            message: "Fetched all posts.",
            posts: posts
        });
    } catch (error) {
        logger.error(error, "Error getting posts")
        res.status(500).json({
            message: 'Failed to fetch all posts. Try again after sometime.'
        })
    }
}

export const deletePostController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deletePostHelper(id);

        logger.info(`Deleted post data successfully with ID: ${id}`)

        res.status(2001).json({ message: "Post deleted." });

    } catch (error) {
        logger.error(error, "Error deleting post")
        res.status(500).json({
            message: 'Failed to delete post data. Try again after sometime.'
        })
    }
}