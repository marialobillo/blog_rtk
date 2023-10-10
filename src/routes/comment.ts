import { Router } from 'express'
import { checkJwtSession } from '../middlewares/session'
const router = Router()

import {
    createComment,
    getCommentsByBlog,
    updateCommentById,
    deleteCommentById
} from '../controllers/comment'

// Routes
router.post('/', checkJwtSession, createComment)
router.get('/:blogId', checkJwtSession, getCommentsByBlog)
router.put('/:commentId', checkJwtSession, updateCommentById)
router.delete('/:commentId', checkJwtSession, deleteCommentById)

export { router }

