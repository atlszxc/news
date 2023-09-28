import { Schema, model } from "mongoose"

export interface IComment {
    userId: string,
    newsId: string,
    text: string
}

const commentSchema = new Schema<IComment>({
    userId: {
        type: String,
        required: true,
    },
    newsId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export const commentModel = model('comment', commentSchema)