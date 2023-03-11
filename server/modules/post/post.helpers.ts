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
            const posts = await Post.find({}).sort({ createdAt: -1 }).skip(sikpCount).limit(POSTS_LIMIT);
            const count = await Post.find({}).count()

            return { posts, count };
        }
    } catch (error: any) {
        throw new Error(error)
    }
}

export const searchPostsHelper = async (field: 'title' | 'userId', queryVal: string, page: number = 1) => {
    try {
        let posts = []
        let count = 0
        const sikpCount = (page - 1) * POSTS_LIMIT;

        if (field === 'title') {
            posts = await Post.find({ title: { $regex: `.*${queryVal}.*`, $options: 'i' } })
                .sort({ createdAt: -1 }).skip(sikpCount).limit(POSTS_LIMIT);
            count = await Post.find({ title: { $regex: `.*${queryVal}.*`, $options: 'i' } }).count()
        } 
        else {
            posts = await Post.find({ user: queryVal })
                .sort({ createdAt: -1 }).skip(sikpCount).limit(POSTS_LIMIT);
            count = await Post.find({ user: queryVal }).count()
        }

        return {posts, count};
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updatePostHelper = async (postId: any, data: {title: string, content: string}) => {
    try {
        await Post.findByIdAndUpdate(postId, data);
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