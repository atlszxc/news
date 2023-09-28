import { Schema, model } from "mongoose";
import { ICategory } from "./category.entity";

interface INews {
    category: ICategory,
    title: string,
    img: string,
    content: string,
    favorites_count: number,
    good_news: number,
    bad_news: number,
    dislikes: number,
    isPublic: boolean,
}

const newsSchema = new Schema<INews>({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    img: {
        type: String,
        required: false,
    },
    good_news: {
        type: Number,
        required: false,
        default: 0
    },
    bad_news: {
        type: Number,
        required: false,
        default: 0
    },
    dislikes: {
        type: Number,
        required: false,
        default: 0
    },
    favorites_count: {
        type: Number,
        required: false,
        default: 0
    },
    isPublic: {
        type: Boolean,
        required: false,
        default: true
    }
}, {
    timestamps: true
})

export const newsModel = model('news', newsSchema)