import { IMovieFavoritesUseCases } from "src/domain/use-cases/movie-favorites";
import { IMovieApiRepository } from "src/application/repositories/movie-api";
import { IMovieFavoritesRepository } from "src/application/repositories/movie-favorites";
import { MovieSearchDataOneMovieDTO, MoviesFavoritesResponseDTO } from "src/domain/dtos/movie-dtos";

export class MovieFavoritesUseCases implements IMovieFavoritesUseCases {
  private readonly movieApiRepository: IMovieApiRepository;
  private readonly movieFavoritesRepository: IMovieFavoritesRepository;

  constructor(movieApiRepository: IMovieApiRepository, movieFavoritesRepository: IMovieFavoritesRepository) {
    this.movieApiRepository = movieApiRepository;
    this.movieFavoritesRepository = movieFavoritesRepository;

    Object.freeze(this);
  }

  async addMovieFavoriteById(id: string) {
    const storedMovie = await this.movieFavoritesRepository.findMovieFavoriteById(id);

    if (storedMovie) return;

    const data = await this.movieApiRepository.getOneMovieById(id);
    if (!data) return;

    await this.movieFavoritesRepository.addMovieFavorite(data);
  }

  async deleteMovieFavoriteById(id: string) {
    await this.movieFavoritesRepository.deleteMovieFavoriteById(id);
  }

  async findMovieFavoriteById(id: string): Promise<MovieSearchDataOneMovieDTO | []> {
    const movie = await this.movieFavoritesRepository.findMovieFavoriteById(id);

    if (!movie) return [];

    return movie;
  }

  async getAllMoviesFavorites(page = 1, limit = 10): Promise<MoviesFavoritesResponseDTO | []> {
    const movies = await this.movieFavoritesRepository.getAllMoviesFavorites(page, limit);
    return movies;
  }
}