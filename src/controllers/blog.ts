import { Request, Response } from 'express'
import { handleHttpError } from '../utils/error.handle'
import {
    insertBlog,
    getBlogs,
    getBlogsByAuthorId,
    updateBlog,
    deleteBlog
} from '../services/blog'

const createBlog = async (req: Request, res: Response) => {
    try {
        const responseBlog = await insertBlog(req.body)
        res.send({ responseBlog})
    } catch (error) {
        handleHttpError(res, 'ERROR_CREATING_BLOG')
    }
}

const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const responseBlogs = await getBlogs()
        res.send({ responseBlogs })
    } catch (error) {
        handleHttpError(res, 'ERROR_GETTING_ALL_BLOGS')
    }
}

const getBlogsByAuthor = async (req: Request, res: Response) => {
    try {
        const authorId = req.params.authorId
        const responseBlogs = await getBlogsByAuthorId(authorId)
        res.send({ responseBlogs })
    } catch (error) {
        handleHttpError(res, 'ERROR_GETTING_BLOGS_BY_AUTHOR')
    }
}

const updateBlogById = async (req: Request, res: Response) => {
    try {
        const blogId = req.params.blogId
        const responseUpdate = await updateBlog(blogId, req.body)
        res.send({ responseUpdate })
    } catch (error) {
        handleHttpError(res, 'ERROR_UPDATING_BLOG_BY_ID')
    }
}

const deleteBlogById = async (req: Request, res: Response) => {
    try {
        const blogId = req.params.blogId
        const responseDelete = await deleteBlog(blogId)
        res.send({ responseDelete })
    } catch (error) {
        handleHttpError(res, 'ERROR_DELETING_BLOG_BY_ID')
    }
}

export {
    createBlog,
    getAllBlogs,
    getBlogsByAuthor,
    updateBlogById,
    deleteBlogById
}