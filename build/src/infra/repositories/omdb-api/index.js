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
exports.MovieApiOmdbApiRepository = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fetch_1 = require("src/shared/fetch");
const map_1 = require("./map");
class MovieApiOmdbApiRepository {
    getAllMoviesPreview(title, movieType = "movie", page = 1, year = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = year >= 1900
                    ? { s: title, page, type: movieType, y: year }
                    : { s: title, page, type: movieType };
                const { data } = yield fetch_1.axiosFetch.get(`${process.env.API_URL_WITH_KEY}`, { params: query });
                if (data.Response === "False")
                    return null;
                const result = data.Search.map(item => map_1.apiPreviewMovieDataToDTO(item));
                return {
                    data: result,
                    total: Number(data.totalResults)
                };
            }
            catch (e) {
                return null;
            }
        });
    }
    getOneMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data } = yield fetch_1.axiosFetch.get(`${process.env.API_URL_WITH_KEY}`, { params: { i: id } });
                if (data.Response === "False")
                    return null;
                const result = map_1.apiOneMovieDataToDTO(data);
                return result;
            }
            catch (e) {
                return null;
            }
        });
    }
}
exports.MovieApiOmdbApiRepository = MovieApiOmdbApiRepository;
