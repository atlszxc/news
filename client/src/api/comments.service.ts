import { api } from "./base.service"

export interface ICountComments {
    count: number
}

export const CommentService = {
    async getCommentsCount(id: string) {
        const { data } = await api.get(`/comment/count/${id}`)
       
        return data
    }
}