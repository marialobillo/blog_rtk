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
exports.loginController = exports.registerController = void 0;
const auth_1 = require("../services/auth");
const error_handle_1 = require("../utils/error.handle");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, fullName } = req.body;
        const responseAuthor = yield (0, auth_1.regiserNewAuthor)({ email, password, fullName });
        return res.status(200).send(responseAuthor);
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_REGISTERING_AUTHOR');
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const responseAuthor = yield (0, auth_1.loginAuthor)({ email, password });
        if (responseAuthor === 'AUTHOR_NOT_FOUND' || responseAuthor === 'INCORRECT_PASSWORD') {
            return res.status(404).json({ message: 'Author not found' });
        }
        return res.status(200).send(responseAuthor);
    }
    catch (error) {
        (0, error_handle_1.handleHttpError)(res, 'ERROR_LOGING_AUTHOR');
    }
});
exports.loginController = loginController;
