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
exports.loginAuthor = exports.regiserNewAuthor = void 0;
const Author_1 = __importDefault(require("../models/Author"));
const bcryptjs_1 = require("bcryptjs");
const password_handle_1 = require("../utils/password.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const regiserNewAuthor = (authDataAuthor) => __awaiter(void 0, void 0, void 0, function* () {
    const isAuthorRegistered = yield Author_1.default.findOne({ email: authDataAuthor.email });
    if (isAuthorRegistered)
        return 'AUTHOR_ALREADY_EXISTS';
    const hashedPassword = yield (0, password_handle_1.encryptPassword)(authDataAuthor.password);
    const registerNewAuthor = yield Author_1.default.create({
        fullName: authDataAuthor.fullName,
        email: authDataAuthor.email,
        password: hashedPassword,
    });
    return registerNewAuthor;
});
exports.regiserNewAuthor = regiserNewAuthor;
const loginAuthor = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const isUserRegistered = yield Author_1.default.findOne({ email });
    if (!isUserRegistered)
        return 'AUTHOR_NOT_FOUND';
    const hashedPassword = isUserRegistered.password;
    const isPasswordCorrect = yield (0, bcryptjs_1.compare)(password, hashedPassword);
    if (!isPasswordCorrect)
        return 'INVALID_PASSWORD';
    const token = (0, jwt_handle_1.generateToken)(isUserRegistered._id);
    const loginAuthorData = {
        user: isUserRegistered,
        token,
    };
    return isPasswordCorrect ? loginAuthorData : 'INCORRECT_PASSWORD';
});
exports.loginAuthor = loginAuthor;
