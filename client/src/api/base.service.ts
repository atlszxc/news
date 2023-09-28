import axios from "axios";

export const api = axios.create({
    baseURL: process.env.API_URL
})

export const curencyApi = axios.create({
    baseURL: process.env.CURENCY_URL
})