import { MovieSearchDataOneMovieDTO, MoviesFavoritesResponseDTO } from "src/domain/dtos/movie-dtos";

export interface IMovieFavoritesRepository {
  addMovieFavorite: (data: MovieSearchDataOneMovieDTO) => Promise<void>;
  findMovieFavoriteById: (id: string) => Promise<MovieSearchDataOneMovieDTO | null>;
  getAllMoviesFavorites: (page: number, limit: number) => Promise<MoviesFavoritesResponseDTO | []>;
  deleteMovieFavoriteById: (id: string) => Promise<void>;
}