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
exports.checkJwtSession = void 0;
const jwt_handle_1 = require("../utils/jwt.handle");
const checkJwtSession = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jwtByAuthor = req.headers.authorization || '';
        const jwt = jwtByAuthor.split(' ').pop();
        const isValidToken = yield (0, jwt_handle_1.verifyToken)(`${jwt}`);
        if (!isValidToken) {
            return res.status(401).send('NON_VALID_JWT_TOKEN');
        }
        else {
            req.user = isValidToken;
        }
        next();
    }
    catch (error) {
        res.status(400).send('ERROR_CHECKING_JWT_SESSION');
    }
});
exports.checkJwtSession = checkJwtSession;
