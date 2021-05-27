import dotenv from "dotenv";
dotenv.config();

import { IMovieApiRepository } from "src/application/repositories/movie-api";
import { MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-search-dtos";
import { axiosFetch } from "src/shared/fetch";
import { apiPreviewMovieDataToDTO } from "./map";
import { OmdbApiSearchAllMoviesResponseType } from "./types";

export class MovieApiOmdbApiRepository implements IMovieApiRepository {
  async getAllMoviesPreview(title: string, movieType = "movie", page = 1): Promise<MovieSearchDataPreviewDTO[] | null> {
    try {
      const { data } = await axiosFetch.get<OmdbApiSearchAllMoviesResponseType>(
        `${process.env.API_URL_WITH_KEY}`, 
        { params: { s: title, page, type: movieType }}
      );
      
      if (data.Response === "False") return null;

      const result = data.Search.map(item => apiPreviewMovieDataToDTO(item));

      return result;
    } catch(e) {
      return null;
    }
  }
}