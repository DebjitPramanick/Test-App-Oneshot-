export const ENV = process.env.NODE_ENV

export const API_URL = ENV === 'deveolpment' ? 'http://localhost:8080/api' : ''

export const TOKEN  = localStorage.getItem("app_token") || ""