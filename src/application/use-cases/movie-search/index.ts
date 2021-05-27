import { IMovieSearchUseCases } from "src/domain/use-cases/movie-search";
import { IMovieApiRepository } from "src/application/repositories/movie-api";
import { MovieSearchMapper } from "src/domain/dtos/movie-search-dtos/data-map";
import { MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-search-dtos";

export class MovieSearchUseCases implements IMovieSearchUseCases {
  private readonly movieApiRepository: IMovieApiRepository;

  constructor(movieApiRepository: IMovieApiRepository) {
    this.movieApiRepository = movieApiRepository;
    Object.freeze(this);
  }

  async getAllMoviesPreview(title: string, movieType = "movie", page = 1): Promise<MovieSearchDataPreviewDTO[] | []> {
    const result = await this.movieApiRepository.getAllMoviesPreview(title, movieType, page);

    if (!result) return [];

    const data = result.map(item => MovieSearchMapper.previewMoviesToDto(item));
    return data;
  }
}