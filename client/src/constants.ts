export const ENV = process.env.NODE_ENV

export const API_URL = ENV === 'deveolpment' ? 'http://localhost:8080/api' : process.env.REACT_APP_API_URL

export const TOKEN  = localStorage.getItem("app_token") || ""

export const AUTH_CLIENT_ID = process.env.REACT_APP_AUTH_CLIENT_ID || ""

export const AUTH_CLIENT_SECRET = process.env.REACT_APP_AUTH_CLIENT_SECRET || ""