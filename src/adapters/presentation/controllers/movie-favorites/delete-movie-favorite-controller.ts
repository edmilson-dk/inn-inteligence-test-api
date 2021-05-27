import { IMovieFavoritesUseCases } from "src/domain/use-cases/movie-favorites";
import { ok, serverError } from "../../http/http-response-type";
import { HttpRequest, HttpResponse } from "../../http/ports/http";
import { BaseController } from "../baseControler";

export class DeleteOneMovieFavoriteController implements BaseController {
  private readonly movieSearchUseCases: IMovieFavoritesUseCases;

  constructor(movieSearchUseCases: IMovieFavoritesUseCases) {
    this.movieSearchUseCases = movieSearchUseCases;
  }

  async  execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const data = await this.movieSearchUseCases.deleteMovieFavoriteById(id);
      return ok(data);
    } catch (e) {
      return serverError(e.message);
    }
  }
}