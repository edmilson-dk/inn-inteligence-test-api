const dotenv = require("dotenv");
dotenv.config();

const pg = require("pg");

pg.defaults.ssl = {
  rejectUnauthorized: false,
}

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: process.env.MIGRATIONS,
      tableName: "knex_migrations"
    }
  },
  test: {
    client: process.env.DB_CLIENT,
    connection: {
      database: "db_tests",
      user: "usertests",
      password: "tests123",
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: process.env.MIGRATIONS,
      tableName: "knex_migrations"
    }
  },
  production: {
    client: process.env.DB_CLIENT,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: process.env.MIGRATIONS,
      tableName: "knex_migrations"
    }
  }
};
