import { MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-search-dtos";

export interface IMovieApiRepository {
  getAllMoviesPreview: (title: string, movieType: string, page: number) => Promise<MovieSearchDataPreviewDTO[] | null>;
}