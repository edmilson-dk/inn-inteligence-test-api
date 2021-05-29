"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiOneMovieDataToDTO = exports.apiPreviewMovieDataToDTO = void 0;
function apiPreviewMovieDataToDTO(data) {
    return {
        title: data.Title,
        poster: data.Poster,
        id: data.imdbID,
        year: data.Year,
        type: data.Type
    };
}
exports.apiPreviewMovieDataToDTO = apiPreviewMovieDataToDTO;
function apiOneMovieDataToDTO(data) {
    return {
        title: data.Title,
        released: data.Released,
        runtime: data.Runtime,
        genre: data.Genre,
        director: data.Director,
        writer: data.Writer,
        actors: data.Actors,
        plot: data.Plot,
        language: data.Language,
        country: data.Country,
        poster: data.Poster,
        id: data.imdbID,
        type: data.Type
    };
}
exports.apiOneMovieDataToDTO = apiOneMovieDataToDTO;
