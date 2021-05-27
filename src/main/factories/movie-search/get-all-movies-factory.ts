import { BaseController } from "src/adapters/presentation/controllers/baseControler";
import { GetAllMoviesController } from "src/adapters/presentation/controllers/movie-search";
import { MovieSearchUseCases } from "src/application/use-cases/movie-search";
import { MovieApiOmdbApiRepository } from "src/infra/repositories/omdb-api";

export function makeGetAllMoviesFactory(): BaseController {
  const movieApiRepository = new MovieApiOmdbApiRepository();
  const movieSearchUseCases = new MovieSearchUseCases(movieApiRepository);
  const getAllMoviesController = new GetAllMoviesController(movieSearchUseCases);

  return getAllMoviesController;
}