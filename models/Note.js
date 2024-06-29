import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./User.js";

const Note = sequelize.define("Note", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    value: DataTypes.INTEGER,
    subject: DataTypes.STRING,
});

export default Note;

User.hasMany(Note);
Note.belongsTo(User);