"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresMovieFavoritesRepository = void 0;
const data_map_1 = require("src/domain/dtos/movie-dtos/data-map");
const postgres_1 = __importDefault(require("src/drivers/db/knex/postgres"));
class PostgresMovieFavoritesRepository {
    addMovieFavorite(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield postgres_1.default("favorites")
                .insert(Object.assign({}, data));
            return;
        });
    }
    findMovieFavoriteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const row = yield postgres_1.default("favorites")
                .where({ id });
            return row.length > 0 ? row[0] : null;
        });
    }
    getAllMoviesFavorites(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const LIMIT_ITEMS = limit;
            const [{ count }] = yield postgres_1.default("favorites").count();
            const rows = yield postgres_1.default("favorites")
                .limit(LIMIT_ITEMS)
                .offset((page - 1) * LIMIT_ITEMS)
                .orderBy('created_at', 'desc');
            if (rows.length === 0)
                return [];
            const result = rows.map(row => data_map_1.MovieSearchMapper.oneMovieToDto(row));
            return {
                data: result,
                total: Number(count)
            };
        });
    }
    deleteMovieFavoriteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield postgres_1.default("favorites")
                .where({ id })
                .del();
            return;
        });
    }
}
exports.PostgresMovieFavoritesRepository = PostgresMovieFavoritesRepository;
