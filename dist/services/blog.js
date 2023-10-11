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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.getBlogsByAuthorId = exports.getBlogs = exports.insertBlog = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
const insertBlog = (blogData) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsertBlog = yield Blog_1.default.create(blogData);
    return responseInsertBlog;
});
exports.insertBlog = insertBlog;
const getBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetBlogs = yield Blog_1.default.find();
    return responseGetBlogs;
});
exports.getBlogs = getBlogs;
const getBlogsByAuthorId = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetBlogsByAuthorId = yield Blog_1.default.find({ authorId });
    return responseGetBlogsByAuthorId;
});
exports.getBlogsByAuthorId = getBlogsByAuthorId;
const updateBlog = (blogId, blogData) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUdpateBalance = yield Blog_1.default.findOneAndUpdate({ _id: blogId }, blogData, { new: true });
    return responseUdpateBalance;
});
exports.updateBlog = updateBlog;
const deleteBlog = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const responseDeleteBlog = yield Blog_1.default.findOneAndDelete({ _id: blogId });
    return responseDeleteBlog;
});
exports.deleteBlog = deleteBlog;
