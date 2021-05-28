import { IMovieSearchUseCases } from "src/domain/use-cases/movie-search";
import { IMovieApiRepository } from "src/application/repositories/movie-api";
import { MovieSearchMapper } from "src/domain/dtos/movie-dtos/data-map";
import { MovieSearchDataOneMovieDTO, MovieSearchDataPreviewResponseDTO } from "src/domain/dtos/movie-dtos";

export class MovieSearchUseCases implements IMovieSearchUseCases {
  private readonly movieApiRepository: IMovieApiRepository;

  constructor(movieApiRepository: IMovieApiRepository) {
    this.movieApiRepository = movieApiRepository;
    Object.freeze(this);
  }

  async getAllMoviesPreview(title: string, movieType = "movie", page = 1, year = 0): Promise<MovieSearchDataPreviewResponseDTO | null> {
    const result = await this.movieApiRepository.getAllMoviesPreview(title, movieType, page, year);

    if (!result) return null;

    const data = result.data.map(item => MovieSearchMapper.previewMoviesToDto(item));
    return {
      data,
      total: result.total
    };
  }

  async getOneMovieById(id: string): Promise<MovieSearchDataOneMovieDTO | []> {
    const result = await this.movieApiRepository.getOneMovieById(id);

    if (!result) return [];

    return result;
  }
}