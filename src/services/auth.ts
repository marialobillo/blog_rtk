import { IAuthor } from "../interfaces/author.interface"
import { IAuth } from "../interfaces/auth.interface"
import AuthorModel from "../models/Author"
import { compare } from 'bcryptjs';
import { encryptPassword } from "../utils/password.handle"
import { generateToken } from "../utils/jwt.handle"


const regiserNewAuthor = async (authDataAuthor: IAuthor) => {
    const isAuthorRegistered = await AuthorModel.findOne({ email: authDataAuthor.email })
    if (isAuthorRegistered) return 'AUTHOR_ALREADY_EXISTS'
    const hashedPassword = await encryptPassword(authDataAuthor.password)

    const registerNewAuthor = await AuthorModel.create({
        fullName: authDataAuthor.fullName,
        email: authDataAuthor.email,
        password: hashedPassword,
    })
    return registerNewAuthor
}

const loginAuthor = async ({ email, password }: IAuth) => {
    const isUserRegistered = await AuthorModel.findOne({ email })
    if(!isUserRegistered) return 'AUTHOR_NOT_FOUND'

    const hashedPassword = isUserRegistered.password
    const isPasswordCorrect = await compare(password, hashedPassword)
    if(!isPasswordCorrect) return 'INVALID_PASSWORD'
    const token = generateToken(isUserRegistered._id)
    const loginAuthorData = {
        user: isUserRegistered,
        token,
    }
    return isPasswordCorrect ? loginAuthorData : 'INCORRECT_PASSWORD'
}

export {
    regiserNewAuthor,
    loginAuthor
}