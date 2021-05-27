import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
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
      });
    }
  })
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTableIfExists('favorites');
}