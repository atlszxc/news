import axios from "axios"
import { ICategory } from "./category.service"
import { api } from "./base.service"

export interface INews {
    _id: string,
    category: ICategory,
    title: string,
    content: string,
    img: string,
    good_news: number,
    bad_news: number,
    dislikes: number,
    favorites_count: number,
    createdAt: string,
}

export interface IGroupedNews {
    category: ICategory,
    news: INews[]
}

export const NewsService = {
    async getLastNews(count: number) {
        const { data } = await api.get<INews[]>(`/news?count=${count}`)
        return data
    },

    async getRandomNews() {
        const { data } = await api.get<INews[]>('http://localhost:8080/news/random')
        return data
    },

    async getGroupedNews() {
        const { data } = await api.get<IGroupedNews[]>('http://localhost:8080/news/grouped')
        return data
    }
}