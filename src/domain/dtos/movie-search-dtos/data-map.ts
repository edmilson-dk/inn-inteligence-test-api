import { MovieSearchDataPreviewDTO, MovieSearchDataOneMovieDTO } from ".";

export class MovieSearchMapper {
  static previewMoviesToDto(data: any): MovieSearchDataPreviewDTO {
    return {
      poster: data.poster,
      title: data.title,
      year: data.year,
      id: data.id,
    }
  }

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
    }
  }
}