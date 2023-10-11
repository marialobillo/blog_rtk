"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const session_1 = require("../middlewares/session");
const router = (0, express_1.Router)();
exports.router = router;
const blog_1 = require("../controllers/blog");
// Routes
router.post('/', session_1.checkJwtSession, blog_1.createBlog);
router.get('/', session_1.checkJwtSession, blog_1.getAllBlogs);
router.get('/:authorId', session_1.checkJwtSession, blog_1.getBlogsByAuthor);
router.put('/:blogId', session_1.checkJwtSession, blog_1.updateBlogById);
router.delete('/:blogId', session_1.checkJwtSession, blog_1.deleteBlogById);
