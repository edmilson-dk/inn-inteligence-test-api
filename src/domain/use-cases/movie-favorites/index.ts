import { MovieSearchDataOneMovieDTO, MoviesFavoritesResponseDTO } from "src/domain/dtos/movie-dtos";

export interface IMovieFavoritesUseCases {
  addMovieFavoriteById: (id: string) => void;
  deleteMovieFavoriteById: (id: string) => void;
  findMovieFavoriteById: (id: string) => Promise<MovieSearchDataOneMovieDTO | []>;
  getAllMoviesFavorites: (page: number, limit: number) => Promise<MoviesFavoritesResponseDTO | []>;
}