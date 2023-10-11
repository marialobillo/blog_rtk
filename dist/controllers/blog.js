"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogById = exports.updateBlogById = exports.getBlogsByAuthor = exports.getAllBlogs = exports.createBlog = void 0;
const error_handle_1 = require("../utils/error.handle");
const blog_1 = require("../services/blog");
const createBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseBlog = yield (0, blog_1.insertBlog)(req.body);
        res.send({ responseBlog });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_CREATING_BLOG');
    }
});
exports.createBlog = createBlog;
const getAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseBlogs = yield (0, blog_1.getBlogs)();
        res.send({ responseBlogs });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_GETTING_ALL_BLOGS');
    }
});
exports.getAllBlogs = getAllBlogs;
const getBlogsByAuthor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authorId = req.params.authorId;
        const responseBlogs = yield (0, blog_1.getBlogsByAuthorId)(authorId);
        res.send({ responseBlogs });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_GETTING_BLOGS_BY_AUTHOR');
    }
});
exports.getBlogsByAuthor = getBlogsByAuthor;
const updateBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.blogId;
        const responseUpdate = yield (0, blog_1.updateBlog)(blogId, req.body);
        res.send({ responseUpdate });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_UPDATING_BLOG_BY_ID');
    }
});
exports.updateBlogById = updateBlogById;
const deleteBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.blogId;
        const responseDelete = yield (0, blog_1.deleteBlog)(blogId);
        res.send({ responseDelete });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_DELETING_BLOG_BY_ID');
    }
});
exports.deleteBlogById = deleteBlogById;
