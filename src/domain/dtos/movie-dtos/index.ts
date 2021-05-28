export type MovieSearchDataPreviewDTO = {
  poster: string;
  title: string;
  year: string;
  type: string;
  id: string;
}

export type MovieSearchDataOneMovieDTO = {
  title: string;
  released: string;
  runtime: string;
  genre:string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  poster: string;
  id: string;
  type: string;
}

export type MoviesFavoritesResponseDTO = {
  data: MovieSearchDataOneMovieDTO[],
  total: number;
}

export type MovieSearchDataPreviewResponseDTO = {
  data: MovieSearchDataPreviewDTO[],
  total: number;
}