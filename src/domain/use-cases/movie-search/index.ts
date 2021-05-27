import { MovieSearchDataOneMovieDTO, MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-dtos";

export interface IMovieSearchUseCases {
  getAllMoviesPreview: (title: string, movieType: string, page: number) => Promise<MovieSearchDataPreviewDTO[] | []>;
  getOneMovieById: (id: string) => Promise<MovieSearchDataOneMovieDTO | []>;
}