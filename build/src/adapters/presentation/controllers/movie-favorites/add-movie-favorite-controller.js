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
exports.AddOneMovieFavoriteController = void 0;
const http_response_type_1 = require("../../http/http-response-type");
class AddOneMovieFavoriteController {
    constructor(movieSearchUseCases) {
        this.movieSearchUseCases = movieSearchUseCases;
    }
    execute(httpRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = httpRequest.body;
                if (!id)
                    return http_response_type_1.badRequest("id of movie is missing", 401);
                const data = yield this.movieSearchUseCases.addMovieFavoriteById(id);
                return http_response_type_1.ok(data);
            }
            catch (e) {
                return http_response_type_1.serverError(e);
            }
        });
    }
}
exports.AddOneMovieFavoriteController = AddOneMovieFavoriteController;
