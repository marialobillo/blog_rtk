import { Request, Response } from 'express'
import { handleHttpError } from '../utils/error.handle'
import {
    insertComment,
    getCommentsByBlogId,
    updateComment,
    deleteComment
} from '../services/comment'

const createComment = async (req: Request, res: Response) => {
    try {
        const responseComment = await insertComment(req.body)
        res.send({ responseComment })
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATING_COMMENT')
    }
}

const getCommentsByBlog = async (req: Request, res: Response) => {
    try {
        const blogId = req.params.blogId
        const responseComments = await getCommentsByBlogId(blogId)
        res.send({ responseComments})
    } catch (error) {
        handleHttpError(res, 'ERROR_GETTING_COMMENTS_BY_BLOG')
    }
}

const updateCommentById = async (req: Request, res: Response) => {
    try {
        const commentId = req.params.commentId
        const responseUpdate = await updateComment(commentId, req.body)
        res.send({ responseUpdate })
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATING_COMMENT_BY_ID')
    }
}

const deleteCommentById = async (req: Request, res: Response) => {
    try {
        const commentId = req.params.commentId
        const responseDelete = await deleteComment(commentId)
        res.send({ responseDelete })
    } catch (error) {
        handleHttpError(res, 'ERROR_DELETING_COMMENT_BY_ID')
    }
}

export {
    createComment,
    getCommentsByBlog,
    updateCommentById,
    deleteCommentById
}