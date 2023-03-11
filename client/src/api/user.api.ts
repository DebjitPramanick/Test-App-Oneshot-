import api from "./config"

export const createUser = async (data: any) => {
    try {
        let result = await api.post(`/user/create`, data)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const getUser = async (userId: string) => {
    try {
        let result = await api.get(`/user/${userId}`)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const searchUsers = async (name: string, page: number = 1) => {
    try {
        let result = await api.get(`/user/search?name=${name}&page=${page}`)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const loginUser = async (userId: string) => {
    try {
        const data = { userId: userId }
        let result = await api.post(`/user/login`, data)
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}

export const checkIfUserExists = async (email: string) => {
    try {
        let result = await api.post(`/user/check`, { email: email })
        result = result.data;
        return result;
    } catch (error: any) {
        const message = error.response.data.message;
        throw new Error(message)
    }
}