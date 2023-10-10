import { Request, Response } from 'express'
import { regiserNewAuthor, loginAuthor } from '../services/auth'
import { handleHttpError } from '../utils/error.handle'

const registerController = async (req: Request, res: Response) => {
    try {
        const { email, password, fullName } = req.body
        const responseAuthor = await regiserNewAuthor({ email, password, fullName })
        return res.status(200).send(responseAuthor)
    } catch (error) {
        handleHttpError(res, 'ERROR_REGISTERING_AUTHOR')
    }
}

const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const responseAuthor = await loginAuthor({ email, password })
        if(responseAuthor === 'AUTHOR_NOT_FOUND' || responseAuthor === 'INCORRECT_PASSWORD'){
            return res.status(404).json({ message: 'Author not found' })
        }
        return res.status(200).send(responseAuthor)
    } catch (error) {
        handleHttpError(res, 'ERROR_LOGING_AUTHOR') 
    }
}

export {
    registerController,
    loginController,
}