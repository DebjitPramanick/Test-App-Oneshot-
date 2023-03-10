import { POSTS_LIMIT } from "../../constants";
import Post from "./post.model";

export const createPostHelper = async (data: any) => {
    try {
        const post = await Post.create(data);
        return post;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getPostHelper = async (postId?: string, page: number = 1) => {
    try {
        if (postId) {
            const post = await Post.findById(postId);
            return post;
        } else {
            const sikpCount = (page - 1) * POSTS_LIMIT;
            const posts = await Post.find({}).sort({createdAt: -1}).skip(sikpCount).limit(POSTS_LIMIT);
            const count = await Post.find({}).count()

            return {posts, count};
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getPostsByTitleHelper = async (title: string) => {
    try {
        const users = await Post.find({title: { $regex: `.*${title}.*`, $options: 'i' }});
        return users;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const deletePostHelper = async (postId: any) => {
    try {
        await Post.findByIdAndDelete(postId);
    } catch (error: any) {
        throw new Error(error)
    }
}