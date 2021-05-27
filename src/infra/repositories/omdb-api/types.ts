export type OmdbAPiSearchAllMoviesDataType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type OmdbAPiSearchOneMovieDataType = {
  Title: string;
  Year: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Response: string;
  Type: string;
  imdbID: string;
}

export type OmdbApiSearchAllMoviesResponseType = {
  Search: OmdbAPiSearchAllMoviesDataType[],
  totalResults: string;
  Response: string;
}