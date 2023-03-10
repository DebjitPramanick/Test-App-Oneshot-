import api from "./config";


export const createPost = async (data: any) => {
    try {
        let result = await api.post(`/post/create`, data)
        result = result.data;
        return result;
    } catch (error: any) {
        throw new Error(error)
    }
}

export const getAllPosts = async (page: number = 1, limit: number = 10) => {
    try {
        let result = await api.get(`/post/all?page=${page}`)
        result = result.data;
        return result;
    } catch (error: any) {
        throw new Error(error)
    }
}