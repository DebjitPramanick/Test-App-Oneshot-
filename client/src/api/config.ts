import axios from 'axios'
import { API_URL, TOKEN } from '../constants'

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `Bearer ${TOKEN}`
    }
})

export default api