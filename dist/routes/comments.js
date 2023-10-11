"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
exports.router = router;
const comment_1 = require("../controllers/comment");
// Routes
router.post('/', session_1.checkJwtSession, comment_1.createComment);
router.get('/:blogId', session_1.checkJwtSession, comment_1.getCommentsByBlog);
router.put('/:commentId', session_1.checkJwtSession, comment_1.updateCommentById);
router.delete('/:commentId', session_1.checkJwtSession, comment_1.deleteCommentById);
