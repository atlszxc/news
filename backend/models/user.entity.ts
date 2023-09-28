import { Schema, model } from "mongoose"

interface IUser {
    email: string,
    password: string,
    username: string,
    favoritesNews: string[]
}

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    favoritesNews: {
        type: [String],
        required: false,
        default: []
    }
})

export const userModel = model('user', userSchema)