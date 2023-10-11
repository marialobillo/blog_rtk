"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttpError = void 0;
const handleHttpError = (res, error) => {
    res.status(500);
    res.send({ error });
};
exports.handleHttpError = handleHttpError;
