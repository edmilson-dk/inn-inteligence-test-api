"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieSearchMapper = void 0;
class MovieSearchMapper {
    static previewMoviesToDto(data) {
        return {
            title: data.title,
            poster: data.poster,
            year: data.year,
            id: data.id,
            type: data.type,
        };
    }
    static oneMovieToDto(data) {
        return {
            title: data.title,
            released: data.released,
            runtime: data.runtime,
            genre: data.genre,
            director: data.director,
            writer: data.writer,
            actors: data.actors,
            plot: data.plot,
            language: data.language,
            country: data.country,
            poster: data.poster,
            id: data.id,
            type: data.type,
        };
    }
}
exports.MovieSearchMapper = MovieSearchMapper;
