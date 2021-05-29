"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetoOneMovieFactory = void 0;
const movie_search_1 = require("src/adapters/presentation/controllers/movie-search");
const movie_search_2 = require("src/application/use-cases/movie-search");
const omdb_api_1 = require("src/infra/repositories/omdb-api");
function makeGetoOneMovieFactory() {
    const movieApiRepository = new omdb_api_1.MovieApiOmdbApiRepository();
    const movieSearchUseCases = new movie_search_2.MovieSearchUseCases(movieApiRepository);
    const getOneMovieController = new movie_search_1.GetOneMovieController(movieSearchUseCases);
    return getOneMovieController;
}
exports.makeGetoOneMovieFactory = makeGetoOneMovieFactory;
