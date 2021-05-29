"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllMoviesFavoritesFactory = void 0;
const movie_favorites_1 = require("src/adapters/presentation/controllers/movie-favorites");
const movie_favorites_2 = require("src/application/use-cases/movie-favorites");
const omdb_api_1 = require("src/infra/repositories/omdb-api");
const movie_favorites_3 = require("src/infra/repositories/postgres/knex/movie-favorites");
function makeGetAllMoviesFavoritesFactory() {
    const movieApiRepository = new omdb_api_1.MovieApiOmdbApiRepository();
    const movieFavoritesRepository = new movie_favorites_3.PostgresMovieFavoritesRepository();
    const movieFavoritesUseCases = new movie_favorites_2.MovieFavoritesUseCases(movieApiRepository, movieFavoritesRepository);
    const getAllMoviesFavoritesController = new movie_favorites_1.GetAllMoviesFavoritesController(movieFavoritesUseCases);
    return getAllMoviesFavoritesController;
}
exports.makeGetAllMoviesFavoritesFactory = makeGetAllMoviesFavoritesFactory;
