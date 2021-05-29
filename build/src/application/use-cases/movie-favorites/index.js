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
exports.MovieFavoritesUseCases = void 0;
class MovieFavoritesUseCases {
    constructor(movieApiRepository, movieFavoritesRepository) {
        this.movieApiRepository = movieApiRepository;
        this.movieFavoritesRepository = movieFavoritesRepository;
        Object.freeze(this);
    }
    addMovieFavoriteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const storedMovie = yield this.movieFavoritesRepository.findMovieFavoriteById(id);
            if (storedMovie)
                return;
            const data = yield this.movieApiRepository.getOneMovieById(id);
            if (!data)
                return;
            yield this.movieFavoritesRepository.addMovieFavorite(data);
        });
    }
    deleteMovieFavoriteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.movieFavoritesRepository.deleteMovieFavoriteById(id);
        });
    }
    findMovieFavoriteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = yield this.movieFavoritesRepository.findMovieFavoriteById(id);
            if (!movie)
                return [];
            return movie;
        });
    }
    getAllMoviesFavorites(page = 1, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield this.movieFavoritesRepository.getAllMoviesFavorites(page, limit);
            return movies;
        });
    }
}
exports.MovieFavoritesUseCases = MovieFavoritesUseCases;
