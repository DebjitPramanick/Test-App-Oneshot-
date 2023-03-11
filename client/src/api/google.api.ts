import axios from "axios";

const URL = "https://www.googleapis.com/oauth2/v3"

export const fetchGoogleUser = async (token: string) => {
    try {
        const headers = {
            "Authorization": `Bearer ${token}`
        }
        const res = await axios.get(`${URL}/userinfo`, {
            headers: headers
        });
        return res.data;
    } catch (error: any) {
        console.log(error)
        throw new Error(error);
    }
}