"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false,
});
const BlogModel = (0, mongoose_1.model)('Blog', BlogSchema);
exports.default = BlogModel;
