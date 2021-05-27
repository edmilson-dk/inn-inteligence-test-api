import { MovieSearchDataOneMovieDTO, MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-dtos";

export interface IMovieApiRepository {
  getAllMoviesPreview: (title: string, movieType: string, page: number) => Promise<MovieSearchDataPreviewDTO[] | null>;
  getOneMovieById: (id: string) => Promise<MovieSearchDataOneMovieDTO | null>;
}