import api from "./config";


export const createPost = async (data: any) => {
    try {
        let result = await api.post(`/post/create`, data)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const getAllPosts = async (page: number = 1, limit: number = 10) => {
    try {
        let result = await api.get(`/post/all?page=${page}`)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const searchPosts = async (title?: string, userId?: string) => {
    try {
        let result = null;
        if (title) {
            result = await api.get(`/post/search?title=${title}`)
        } else {
            result = await api.get(`/post/search?userId=${userId}`)
        }
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const deletePost = async (postId?: string) => {
    try {
        let result = await api.get(`/user/delete/${postId}`)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}