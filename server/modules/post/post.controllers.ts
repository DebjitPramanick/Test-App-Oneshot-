import { Request, Response } from "express";
import {ObjectId} from 'mongodb'
import logger from "../../utils/logger.util";
import { createPostHelper, deletePostHelper, getPostHelper } from "./post.helpers";

export const createPostController = async (req: Request, res: Response) => {
    try {
        const { title, content, user } = req.body;

        const data = {
            title: title,
            content: content,
            user: new ObjectId(user),
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
            logger.error(`No post found with ID: ${id}`)
            res.status(404).json({ message: "Post not found." });
            return;
        }

        logger.info(`Found post successfully with ID: ${id}`)

        res.status(200).json({
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
        const {page} = req.query;

        const posts: any = await getPostHelper(undefined, Number(page));

        logger.info(`Fetched all posts`)

        res.status(200).json({
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

        const {isAdmin, userId}: any = (req as any).token

        if(!isAdmin) {
            logger.error(`Post was not deleted by unauthorized user with ID: ${userId}`)
            res.status(404).json({ message: "You are not authorized to delete the post." });
            return;
        }

        await deletePostHelper(id);

        logger.info(`Deleted post data successfully with ID: ${id}`)

        res.status(200).json({ message: "Post deleted." });

    } catch (error) {
        logger.error(error, "Error deleting post")
        res.status(500).json({
            message: 'Failed to delete post data. Try again after sometime.'
        })
    }
}