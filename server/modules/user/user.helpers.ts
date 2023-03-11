import User from "./user.model";
import jwt from 'jsonwebtoken';
import { POSTS_LIMIT, SECRET_KEY, TOKEN_EXP } from "../../constants";
import Post from "../post/post.model";

export const createUserHelper = async (data: any) => {
    try {
        const user = await User.create(data);
        return user;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const loginUserHelper = async (userId: string) => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getUserHelper = async (userId: string) => {
    try {
        const user = await User.findById(userId);
        return user;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const searchUsersHelper = async (name: string, page: number = 1) => {
    try {
        const sikpCount = (page - 1) * POSTS_LIMIT;

        const users = await User.find({ name: { $regex: `.*${name}.*`, $options: 'i' } })
            .sort({ createdAt: -1 }).skip(sikpCount).limit(POSTS_LIMIT);
            
        const count = await User.find({ name: { $regex: `.*${name}.*`, $options: 'i' } }).count();

        return {users, count};
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getUserByEmailHelper = async (email: string) => {
    try {
        const user = await User.findOne({ email: email });
        return user;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const deleteUserHelper = async (userId: any) => {
    try {
        await User.findByIdAndDelete(userId);
        await Post.deleteMany({user: userId})
    } catch (error: any) {
        throw new Error(error)
    }
}

export const generateToken = async (data: { email: string, userId: string, isAdmin: boolean }) => {
    const token = jwt.sign(data, SECRET_KEY, { expiresIn: TOKEN_EXP });
    return token;
}