import sequelize from "../config/database";
import User from "../models/User";

try {
    await sequelize.authenticate();
    console.log("Database conected");

    User.sync();


} catch (error) {
    console.log("Error to conect/insert on database:", error);
} finally {
    sequelize.close();
}