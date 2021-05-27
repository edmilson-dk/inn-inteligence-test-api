import { BaseController } from "src/adapters/presentation/controllers/baseControler";
import { GetOneMovieController } from "src/adapters/presentation/controllers/movie-search";
import { MovieSearchUseCases } from "src/application/use-cases/movie-search";
import { MovieApiOmdbApiRepository } from "src/infra/repositories/omdb-api";

export function makeGetoOneMovieFactory(): BaseController {
  const movieApiRepository = new MovieApiOmdbApiRepository();
  const movieSearchUseCases = new MovieSearchUseCases(movieApiRepository);
  const getOneMovieController = new GetOneMovieController(movieSearchUseCases);

  return getOneMovieController;
}