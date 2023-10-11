"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AuthorSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, require: true, minLength: 6, maxLength: 255 },
}, {
    timestamps: true,
    versionKey: false,
});
const AuthorModel = (0, mongoose_1.model)("Author", AuthorSchema);
exports.default = AuthorModel;
