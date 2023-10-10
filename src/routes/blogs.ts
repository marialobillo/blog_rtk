import { Router } from 'express'
import { checkJwtSession } from '../middlewares/session'

const router = Router()

import {
    createBlog,
    getAllBlogs,
    getBlogsByAuthor,
    updateBlogById,
    deleteBlogById
} from '../controllers/blog'

// Routes
router.post('/', checkJwtSession, createBlog)
router.get('/', checkJwtSession, getAllBlogs)
router.get('/:authorId', checkJwtSession, getBlogsByAuthor)
router.put('/:blogId', checkJwtSession, updateBlogById)
router.delete('/:blogId', checkJwtSession, deleteBlogById)

export { router }