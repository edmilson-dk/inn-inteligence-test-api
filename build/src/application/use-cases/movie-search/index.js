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
exports.MovieSearchUseCases = void 0;
const data_map_1 = require("src/domain/dtos/movie-dtos/data-map");
class MovieSearchUseCases {
    constructor(movieApiRepository) {
        this.movieApiRepository = movieApiRepository;
        Object.freeze(this);
    }
    getAllMoviesPreview(title, movieType = "movie", page = 1, year = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.movieApiRepository.getAllMoviesPreview(title, movieType, page, year);
            if (!result)
                return null;
            const data = result.data.map(item => data_map_1.MovieSearchMapper.previewMoviesToDto(item));
            return {
                data,
                total: result.total
            };
        });
    }
    getOneMovieById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.movieApiRepository.getOneMovieById(id);
            if (!result)
                return [];
            return result;
        });
    }
}
exports.MovieSearchUseCases = MovieSearchUseCases;
