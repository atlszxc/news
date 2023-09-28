import { api } from "./base.service"

export interface ICategory {
    _id: string,
    title: string
}

export const CategoryService = {
    async getCategories() {
        const { data } = await api.get<ICategory[]>('/category')
        return data
    }
}