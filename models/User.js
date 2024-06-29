import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const User = sequelize.define('Users', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    adress: DataTypes.STRING,
})

export default User;