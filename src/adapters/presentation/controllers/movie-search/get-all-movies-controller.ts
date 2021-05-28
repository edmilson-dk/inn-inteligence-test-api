import { IMovieSearchUseCases } from "src/domain/use-cases/movie-search";
import { ok, serverError } from "../../http/http-response-type";
import { HttpRequest, HttpResponse } from "../../http/ports/http";
import { BaseController } from "../baseControler";

export class GetAllMoviesController implements BaseController {
  private readonly movieSearchUseCases: IMovieSearchUseCases;

  constructor(movieSearchUseCases: IMovieSearchUseCases) {
    this.movieSearchUseCases = movieSearchUseCases;
  }

  async  execute(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { page, type, title, year } = httpRequest.query;

      const data = await this.movieSearchUseCases.getAllMoviesPreview(
        title, type, page || 1, 
        Number(year) >= 1900 ? Number(year) : 0
      );
      return ok(data);
    } catch (e) {
      return serverError(e.message);
    }
  }
}