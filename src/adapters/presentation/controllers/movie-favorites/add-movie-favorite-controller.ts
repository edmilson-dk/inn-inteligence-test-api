import { IMovieFavoritesUseCases } from "src/domain/use-cases/movie-favorites";
import { badRequest, ok, serverError } from "../../http/http-response-type";
import { HttpRequest, HttpResponse } from "../../http/ports/http";
import { BaseController } from "../baseControler";

export class AddOneMovieFavoriteController implements BaseController {
  private readonly movieSearchUseCases: IMovieFavoritesUseCases;

  constructor(movieSearchUseCases: IMovieFavoritesUseCases) {
    this.movieSearchUseCases = movieSearchUseCases;
  }

  async  execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.body;

      if (!id) return badRequest("id of movie is missing", 401);

      const data = await this.movieSearchUseCases.addMovieFavoriteById(id);
      return ok(data);
    } catch (e) {
      return serverError(e);
    }
  }
}