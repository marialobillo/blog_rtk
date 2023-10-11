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
exports.deleteComment = exports.updateComment = exports.getCommentsByBlogId = exports.insertComment = void 0;
const Comment_1 = __importDefault(require("../models/Comment"));
const insertComment = (commentData) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsertComment = yield Comment_1.default.create(commentData);
    return responseInsertComment;
});
exports.insertComment = insertComment;
const getCommentsByBlogId = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const responseGetCommentsByBlogId = yield Comment_1.default.find({ blogId });
    return responseGetCommentsByBlogId;
});
exports.getCommentsByBlogId = getCommentsByBlogId;
const updateComment = (commentId, commentData) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUdpateComment = yield Comment_1.default.findOneAndUpdate({ _id: commentId }, commentData, { new: true });
    return responseUdpateComment;
});
exports.updateComment = updateComment;
const deleteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
    const responseDeleteComment = yield Comment_1.default.findOneAndDelete({ _id: commentId });
    return responseDeleteComment;
});
exports.deleteComment = deleteComment;
