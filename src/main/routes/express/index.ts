import { Router } from "express";
import { adaptRoute } from "../../adapters/express-adapter";
import { makeGetAllMoviesFactory } from "src/main/factories/movie-search/get-all-movies-factory";

const routes = Router();

routes.get("/search/all", adaptRoute(makeGetAllMoviesFactory()));

export default routes;