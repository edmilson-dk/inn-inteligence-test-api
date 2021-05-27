import dotenv from "dotenv";
dotenv.config();

import { IMovieApiRepository } from "src/application/repositories/movie-api";
import { MovieSearchDataOneMovieDTO, MovieSearchDataPreviewDTO } from "src/domain/dtos/movie-dtos";
import { axiosFetch } from "src/shared/fetch";
import { apiOneMovieDataToDTO, apiPreviewMovieDataToDTO } from "./map";
import { OmdbApiSearchAllMoviesResponseType, OmdbAPiSearchOneMovieDataType } from "./types";

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

  async getOneMovieById(id: string): Promise<MovieSearchDataOneMovieDTO | null> {
    try {
      const { data } = await axiosFetch.get<OmdbAPiSearchOneMovieDataType>(
        `${process.env.API_URL_WITH_KEY}`, 
        { params: { i: id }}
      );
      
      if (data.Response === "False") return null;

      const result = apiOneMovieDataToDTO(data);

      return result;
    } catch(e) {
      return null;
    }
  }
}