import { MovieSearchDataOneMovieDTO, MovieSearchDataPreviewResponseDTO } from "src/domain/dtos/movie-dtos";

export interface IMovieSearchUseCases {
  getAllMoviesPreview: (title: string, movieType: string, page: number) => Promise<MovieSearchDataPreviewResponseDTO | null>;
  getOneMovieById: (id: string) => Promise<MovieSearchDataOneMovieDTO | []>;
}