import { MovieSearchDataPreviewDTO, MovieSearchDataOneMovieDTO } from ".";

export class MovieSearchMapper {
  static oneMovieToDto(data: any): MovieSearchDataOneMovieDTO {
    return {
      title: data.title,
      released: data.released,
      runtime: data.runtime,
      genre: data.genre,
      director: data.director,
      writer: data.writer,
      actors: data.actors,
      plot: data.plot,
      language: data.language,
      country: data.country,
      poster: data.poster,
      id: data.id,
      type: data.type,
    }
  }
}