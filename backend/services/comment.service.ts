import { commentModel, IComment } from "../models/comment.entity"
import { NewsService } from "./news.service"

export const CommentService = {
    async getAll(newsId: string) {
        try {
            return await commentModel.find({ newsId })
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async create(data: IComment) {
        try {
            return await commentModel.create(data)
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async delete(id: string) {
        try {
            return await commentModel.findByIdAndDelete(id)
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async getCommentsCount(id: string) {
        try {
            return await commentModel.find({ newsId: id }).count()
        } catch (error) {
            throw Error('Something wrong')
        }
    } 
}