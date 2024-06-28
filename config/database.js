import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({path: "../.env"});

const sequelize = new Sequelize(`postgresql://mydb_vz21_user:${process.env.DB_PASSWORD}@${process.env.DB_ENDPOINT}/mydb_vz21`, {
    dialectOptions: {
        ssl: {
            require: true,
        },
    },
});

export default sequelize;