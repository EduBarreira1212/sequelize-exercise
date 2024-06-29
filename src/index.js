import sequelize from "../config/database.js";
import User from "../models/User.js";

try {
    await sequelize.authenticate();
    console.log("Database conected");

    await User.sync();

    const newUser = await User.create({
        name: "Eduardo",
        email: "edu@.com",
        password: "12345",
    });
    console.log("New user created:", newUser.toJSON());

    const allUsers = await User.findAll();
    console.log("All users:", allUsers.map((u) => u.toJSON()));

    const user = await User.findByPk(1);
    await user.update({password: "00000"});
    console.log("User updated:", user.toJSON());

    const userDeleted = await User.findByPk(1);
    await userDeleted.destroy();
    console.log("User deleted");
} catch (error) {
    console.log("Error to conect/insert on database:", error);
} finally {
    console.log("CLOSE");
    sequelize.close();
}