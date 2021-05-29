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
exports.GetAllMoviesController = void 0;
const http_response_type_1 = require("../../http/http-response-type");
class GetAllMoviesController {
    constructor(movieSearchUseCases) {
        this.movieSearchUseCases = movieSearchUseCases;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { page, type, title, year } = httpRequest.query;
                const data = yield this.movieSearchUseCases.getAllMoviesPreview(title, type, page || 1, Number(year) >= 1900 ? Number(year) : 0);
                return http_response_type_1.ok(data);
            }
            catch (e) {
                return http_response_type_1.serverError(e.message);
            }
        });
    }
}
exports.GetAllMoviesController = GetAllMoviesController;
