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
exports.verifyPassword = exports.encryptPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const SALT_ROUNDS = 10;
const encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, SALT_ROUNDS);
    return hashedPassword;
});
exports.encryptPassword = encryptPassword;
const verifyPassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const isPasswordCorrect = yield (0, bcryptjs_1.compare)(password, hashedPassword);
    return isPasswordCorrect;
});
exports.verifyPassword = verifyPassword;
