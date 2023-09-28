import { Schema, model } from "mongoose"

export interface ICategory {
    title: string
}

const categorySchema = new Schema<ICategory>({
    title: {
        required: true,
        type: String,
    }
})

export const categoryModel = model('category', categorySchema)