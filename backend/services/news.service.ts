import { newsModel } from "../models/news.entity"
import { CategoryService } from "./category.service"
import { ICreateNewsDto } from './dto/createNews.dto'

export const NewsService = {
    async getAll(categoryId: string) {
        try {
            return await newsModel.find({ category: categoryId }).populate('category')
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async getCountNews(count: number) {
        try {
            return await newsModel.find().limit(count).populate('category')
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async getOne(id: string) {
        try {
            return await newsModel.findOne({ _id: id })
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async getRandomNews() {
        try {
            const data = await newsModel.aggregate().sample(4)
            return await newsModel.populate(data, { path: 'category', select: 'title' })
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async create(data: ICreateNewsDto) {
        try {
            return await newsModel.create(data)
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async delete(id: string) {
        try {
            return await newsModel.findByIdAndDelete(id)
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async groupedNews() {
        const res = []

        try {
            const categories = await CategoryService.getAll()
            
            for(const category of categories) {
                const news = await newsModel.find({ category: category._id }).limit(4)
                res.push({
                    category: category,
                    news
                })
            }
        } catch (error) {
            throw Error('Something wrong')
        }

        return res
    }
}