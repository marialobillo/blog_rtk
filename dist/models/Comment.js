"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CommentSchema = new mongoose_1.Schema({
    message: { type: String, required: true },
    authorId: { type: String, required: true },
    blogId: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const CommentModel = (0, mongoose_1.model)("Comment", CommentSchema);
exports.default = CommentModel;
