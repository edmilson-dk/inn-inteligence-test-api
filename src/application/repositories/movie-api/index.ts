import { MovieSearchDataOneMovieDTO, MovieSearchDataPreviewResponseDTO } from "src/domain/dtos/movie-dtos";

export interface IMovieApiRepository {
  getAllMoviesPreview: (title: string, movieType: string, page: number, year: number) => Promise<MovieSearchDataPreviewResponseDTO | null>;
  getOneMovieById: (id: string) => Promise<MovieSearchDataOneMovieDTO | null>;
}