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
exports.deleteCommentById = exports.updateCommentById = exports.getCommentsByBlog = exports.createComment = void 0;
const error_handle_1 = require("../utils/error.handle");
const comment_1 = require("../services/comment");
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseComment = yield (0, comment_1.insertComment)(req.body);
        res.send({ responseComment });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_CREATING_COMMENT');
    }
});
exports.createComment = createComment;
const getCommentsByBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.blogId;
        const responseComments = yield (0, comment_1.getCommentsByBlogId)(blogId);
        res.send({ responseComments });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_GETTING_COMMENTS_BY_BLOG');
    }
});
exports.getCommentsByBlog = getCommentsByBlog;
const updateCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.commentId;
        const responseUpdate = yield (0, comment_1.updateComment)(commentId, req.body);
        res.send({ responseUpdate });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_UPDATING_COMMENT_BY_ID');
    }
});
exports.updateCommentById = updateCommentById;
const deleteCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commentId = req.params.commentId;
        const responseDelete = yield (0, comment_1.deleteComment)(commentId);
        res.send({ responseDelete });
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_DELETING_COMMENT_BY_ID');
    }
});
exports.deleteCommentById = deleteCommentById;
