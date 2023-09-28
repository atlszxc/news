import { categoryModel, ICategory } from "../models/category.entity"

export interface ICategoryResponse {
    _id: string,
    title: string
}

export const CategoryService = {
    async getAll(): Promise<ICategoryResponse[]> {
        try {
            return await categoryModel.find()
        } catch (error) {
            throw Error('Something wrong')
        }
        
    },

    async getOne(id: string): Promise<ICategoryResponse | null> {
        try {
            return await categoryModel.findById(id)
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async create(data: ICategory) {
        try {
            return await categoryModel.create(data)
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async delete(id: string) {
        try {
            return await categoryModel.findByIdAndDelete(id)
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async update(id: string, data: ICategory): Promise<ICategoryResponse | null> {
       try {
            return await categoryModel.findByIdAndUpdate(id, {
                ...data
            })
       } catch (error) {
            throw Error('Somthing wrong')
       }
    }
}