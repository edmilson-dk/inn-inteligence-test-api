import { IMovieFavoritesUseCases } from "src/domain/use-cases/movie-favorites";
import { ok, serverError } from "../../http/http-response-type";
import { HttpRequest, HttpResponse } from "../../http/ports/http";
import { BaseController } from "../baseControler";

export class GetAllMoviesFavoritesController implements BaseController {
  private readonly movieSearchUseCases: IMovieFavoritesUseCases;

  constructor(movieSearchUseCases: IMovieFavoritesUseCases) {
    this.movieSearchUseCases = movieSearchUseCases;
  }

  async  execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { page, limit } = httpRequest.query;

      const data = await this.movieSearchUseCases.getAllMoviesFavorites(page || 1, limit || 10);
      return ok(data);
    } catch (e) {
      console.log(e)
      return serverError(e.message);
    }
  }
}