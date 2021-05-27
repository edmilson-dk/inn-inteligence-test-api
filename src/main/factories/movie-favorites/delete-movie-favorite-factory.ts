import { BaseController } from "src/adapters/presentation/controllers/baseControler";
import { DeleteOneMovieFavoriteController } from "src/adapters/presentation/controllers/movie-favorites";
import { MovieFavoritesUseCases } from "src/application/use-cases/movie-favorites";
import { MovieApiOmdbApiRepository } from "src/infra/repositories/omdb-api";
import { PostgresMovieFavoritesRepository } from "src/infra/repositories/postgres/knex/movie-favorites";

export function makeDeleteOneMovieFavoriteFactory(): BaseController {
  const movieApiRepository = new MovieApiOmdbApiRepository();
  const movieFavoritesRepository = new PostgresMovieFavoritesRepository();
  const movieFavoritesUseCases = new MovieFavoritesUseCases(movieApiRepository, movieFavoritesRepository);
  const deleteOneMovieFavoriteController = new DeleteOneMovieFavoriteController(movieFavoritesUseCases);

  return deleteOneMovieFavoriteController;
}