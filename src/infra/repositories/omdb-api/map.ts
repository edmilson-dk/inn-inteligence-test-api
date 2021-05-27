import { MovieSearchDataOneMovieDTO, MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-search-dtos";
import { OmdbAPiSearchAllMoviesDataType, OmdbAPiSearchOneMovieDataType } from "./types";

export function apiPreviewMovieDataToDTO(data: OmdbAPiSearchAllMoviesDataType): MovieSearchDataPreviewDTO {
  return {
    title: data.Title,
    poster: data.Poster,
    id: data.imdbID,
    year: data.Year,
  }
}

export function apiOneMovieDataToDTO(data: OmdbAPiSearchOneMovieDataType): MovieSearchDataOneMovieDTO {
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
  }
}