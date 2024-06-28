import sequelize from "../config/database.js";

try {
    console.log("TRY");
    await sequelize.authenticate();
    console.log("Database conected");

} catch (error) {
    console.log("ERRO");
    console.log("Error to conect/insert on database:", error);
} finally {
    console.log("CLOSE");
    sequelize.close();
}