import { IMovieSearchUseCases } from "src/domain/use-cases/movie-search";
import { ok, serverError } from "../../http/http-response-type";
import { HttpRequest, HttpResponse } from "../../http/ports/http";
import { BaseController } from "../baseControler";

export class GetOneMovieController implements BaseController {
  private readonly movieSearchUseCases: IMovieSearchUseCases;

  constructor(movieSearchUseCases: IMovieSearchUseCases) {
    this.movieSearchUseCases = movieSearchUseCases;
  }

  async  execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params;

      const data = await this.movieSearchUseCases.getOneMovieById(id);
      return ok(data);
    } catch (e) {
      return serverError(e.message);
    }
  }
}