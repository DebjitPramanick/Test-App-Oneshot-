import User from "./user.model";
import jwt from 'jsonwebtoken';
import { SECRET_KEY, TOKEN_EXP } from "../../constants";

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

export const getUserByEmailHelper = async (email: string) => {
    try {
        const user = await User.findOne({email: email});
        return user;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const deleteUserHelper = async (userId: any) => {
    try {
        await User.findByIdAndDelete(userId);
    } catch (error: any) {
        throw new Error(error)
    }
}

export const generateToken = async (data: {email: string, userId: string, isAdmin: boolean}) => {
    const token = jwt.sign(data, SECRET_KEY, {expiresIn: TOKEN_EXP});
    return token;
}