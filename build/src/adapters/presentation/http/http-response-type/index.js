"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.ok = exports.badRequest = void 0;
const badRequest = (error, statusCode = 400) => ({
    statusCode,
    body: error
});
exports.badRequest = badRequest;
const ok = (data, statusCode = 200) => ({
    statusCode,
    body: data
});
exports.ok = ok;
const serverError = (reason) => ({
    statusCode: 500,
    body: new Error(reason).message,
});
exports.serverError = serverError;
