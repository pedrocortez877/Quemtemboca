import { Sequelize, Dialect } from 'sequelize';

const DB_DIALECT = process.env.DB_DIALECT as Dialect;

console.log(DB_DIALECT);

export const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: DB_DIALECT,
    host: process.env.DB_HOST,
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00'
  }
);
