import { userModel } from "../models/user.entity"
import { ICreateUserDto } from './dto/createUser.dto'

export const UserService = {
    async getUserByEmailAndPassword(email: string, password: string) {
        try {
            return await userModel.find({ email, password })
        } catch (error) {
            throw Error('Something wrong')
        }
    },

    async createUser(data: ICreateUserDto) {
        try {
            const condidate = await userModel.findOne({ email: data.email })
            if(condidate) {
                throw Error('User with this email already exist')
            }

            return await userModel.create(data)
        } catch (error) {
            throw Error('Something wrong')
        }
    }
}