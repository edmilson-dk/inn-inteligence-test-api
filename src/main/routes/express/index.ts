import { Router } from "express";

import { adaptRoute } from "../../adapters/express-adapter";
import { makeGetAllMoviesFactory } from "src/main/factories/movie-search/get-all-movies-factory";
import { makeGetoOneMovieFactory } from "src/main/factories/movie-search/get-one-movie-factory";
import { makeAddOneMovieFavoriteFactory } from "src/main/factories/movie-favorites/add-movie-favorite-factory";
import { makeDeleteOneMovieFavoriteFactory } from "src/main/factories/movie-favorites/delete-movie-favorite-factory";
import { makeGetoOneMovieFavoriteFactory } from "src/main/factories/movie-favorites/get-one-movie-favorite-factory";
import { makeGetAllMoviesFavoritesFactory } from "src/main/factories/movie-favorites/get-all-movies-favorites-factory";

const routes = Router();

routes.get("/search/all", adaptRoute(makeGetAllMoviesFactory()));
routes.get("/search/infos/:id", adaptRoute(makeGetoOneMovieFactory()));
routes.post("/favorites/add", adaptRoute(makeAddOneMovieFavoriteFactory()));
routes.delete("/favorites/:id", adaptRoute(makeDeleteOneMovieFavoriteFactory()));
routes.get("/favorite/:id", adaptRoute(makeGetoOneMovieFavoriteFactory()));
routes.get("/favorites", adaptRoute(makeGetAllMoviesFavoritesFactory()));

export default routes;