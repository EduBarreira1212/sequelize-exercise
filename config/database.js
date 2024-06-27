import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path: "../.env"})

const sequelize = new Sequelize('database-test', 'postgres', process.env.DB_PASSWORD, {
    host: process.env.DB_ENDPOINT,
    dialect: "postgres",
});

console.log(sequelize);

export default sequelize;