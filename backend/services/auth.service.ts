import { ISignInDto } from './dto/signIn.dto'
import { ICreateUserDto } from './dto/createUser.dto'
import { UserService } from './user.service'

export const AuthService = {
    async signIn(data: ISignInDto) {
       try {
            const user = await UserService.getUserByEmailAndPassword(data.email, data.password)
            return user
       } catch (error) {
            return error
       }
    },

    async signUp(data: ICreateUserDto) {
        try {
            const user = await UserService.createUser(data)
            return user
        } catch (error) {
            return error
        }
    }
}