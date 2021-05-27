import { MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-search-dtos";

export interface IMovieSearchUseCases {
  getAllMoviesPreview: (title: string, movieType: string, page: number) => Promise<MovieSearchDataPreviewDTO[] | []>;
}