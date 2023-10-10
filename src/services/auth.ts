import { IAuthor } from "../interfaces/author.interface"
import { IAuth } from "../interfaces/auth.interface"
import AuthorModel from "../models/Author"
import { compare } from "bcryptjs"


const regiserNewAuthor = async (authDataAuthor: IAuthor) => {

}

const loginAuthor = async ({ email, password }: IAuth) => {

}

export {
    regiserNewAuthor,
    loginAuthor
}