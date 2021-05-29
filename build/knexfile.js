"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pg_1 = __importDefault(require("pg"));
pg_1.default.defaults.ssl = {
    rejectUnauthorized: false,
};
exports.default = {
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
