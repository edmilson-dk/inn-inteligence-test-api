import { IMovieFavoritesRepository } from "src/application/repositories/movie-favorites";
import { MovieSearchDataOneMovieDTO, MoviesFavoritesResponseDTO } from "src/domain/dtos/movie-dtos";
import { MovieSearchMapper } from "src/domain/dtos/movie-dtos/data-map";
import db from "src/drivers/db/knex/postgres";

export class PostgresMovieFavoritesRepository implements IMovieFavoritesRepository {
  async addMovieFavorite(data: MovieSearchDataOneMovieDTO) {
    await db("favorites")
      .insert({ ...data });

    return;
  }

  async findMovieFavoriteById(id: string): Promise<MovieSearchDataOneMovieDTO | null> {
    const row = await db("favorites")
      .where({ id });

    return row.length > 0 ? row[0] : null;
  }

  async getAllMoviesFavorites(page: number, limit: number): Promise<MoviesFavoritesResponseDTO | []> {
    const LIMIT_ITEMS = limit;

    const [{ count }] = await db("favorites").count();
    
    const rows = await db("favorites")
    .limit(LIMIT_ITEMS)
    .offset((page - 1) * LIMIT_ITEMS)
    .orderBy('created_at', 'desc');

    if (rows.length === 0) return [];

    const result = rows.map(row => MovieSearchMapper.oneMovieToDto(row));

    return {
      data: result,
      total: Number(count)
    };
  }

  async deleteMovieFavoriteById(id: string) {
    await db("favorites")
      .where({ id })
      .del();

    return;
  }
}