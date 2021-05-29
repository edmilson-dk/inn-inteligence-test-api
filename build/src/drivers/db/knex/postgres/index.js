"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const environment = process.env.NODE_ENV || 'development';
const knexfile_1 = __importDefault(require("../../../../../knexfile"));
const knex_1 = __importDefault(require("knex"));
let knexConfig = environment === 'development'
    ? knexfile_1.default.development
    : knexfile_1.default.production;
knexConfig = environment === 'test' ? knexfile_1.default.test : knexConfig;
const db = knex_1.default(knexConfig);
exports.default = db;
