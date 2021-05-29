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
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
function up(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        knex.schema.hasTable('favorites').then(exists => {
            if (!exists) {
                return knex.schema.createTable('favorites', table => {
                    table.string('id').notNullable().unique();
                    table.string('title').notNullable();
                    table.string('type').notNullable();
                    table.string('actors').notNullable();
                    table.string('language').notNullable();
                    table.string('poster').notNullable();
                    table.string('released').notNullable();
                    table.string('genre').notNullable();
                    table.string('director').notNullable();
                    table.text('writer').notNullable();
                    table.text('plot').notNullable();
                    table.string('country').notNullable();
                    table.string('runtime').notNullable();
                    table.timestamp('created_at').defaultTo(knex.fn.now());
                });
            }
        });
    });
}
exports.up = up;
function down(knex) {
    return __awaiter(this, void 0, void 0, function* () {
        knex.schema.dropTableIfExists('favorites');
    });
}
exports.down = down;
