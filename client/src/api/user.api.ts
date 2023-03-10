import api from "./config"

export const createUser = async (data: any) => {
    
}

export const getUser = async (userId: string) => {
    try {
        let result = await api.get(`/user/${userId}`)
        result = result.data;
        return result;
    } catch (error: any) {
        throw new Error(error)
    }
}