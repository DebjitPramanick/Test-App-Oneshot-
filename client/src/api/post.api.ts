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

export const getAllPosts = async (page: number = 1) => {
    try {
        let result = await api.get(`/post/all?page=${page}`)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const searchPosts = async (title?: string, userId?: string, page: number = 1) => {
    try {
        let result = null;
        if (title) {
            result = await api.get(`/post/search?title=${title}&page=${page}`)
        } else {
            result = await api.get(`/post/search?userId=${userId}&page=${page}`)
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
        let result = await api.delete(`/post/delete/${postId}`)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const updatePost = async (postId: string, data: any) => {
    try {
        let result = await api.delete(`/post/update/${postId}`, data)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}