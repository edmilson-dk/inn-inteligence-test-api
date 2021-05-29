"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetAllMoviesFactory = void 0;
const movie_search_1 = require("src/adapters/presentation/controllers/movie-search");
const movie_search_2 = require("src/application/use-cases/movie-search");
const omdb_api_1 = require("src/infra/repositories/omdb-api");
function makeGetAllMoviesFactory() {
    const movieApiRepository = new omdb_api_1.MovieApiOmdbApiRepository();
    const movieSearchUseCases = new movie_search_2.MovieSearchUseCases(movieApiRepository);
    const getAllMoviesController = new movie_search_1.GetAllMoviesController(movieSearchUseCases);
    return getAllMoviesController;
}
exports.makeGetAllMoviesFactory = makeGetAllMoviesFactory;
