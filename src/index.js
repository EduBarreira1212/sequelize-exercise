import sequelize from "../config/database.js";
import User from "../models/User.js";

try {
    await sequelize.authenticate();
    console.log("Database conected");

    await User.sync();

    const newUser = await User.create({
        email: "edu@.com",
        name: "Eduardo",
        password: "12345",
        phone: "(85)11111-2222",
        adress: "Fortaleza-CE"
    });

    console.log("New user:", newUser.toJSON());

    const users = await User.findAll();
    console.log("Users list:", users.map((u) => u.toJSON()));

    const user = await User.findByPk("edu@.com");
    await user.update({
        name: "Eduardo Barreira"
    });
    console.log("User updated:", user.toJSON());

    const userDelete = await User.findByPk("edu@.com");
    await userDelete.destroy();
    console.log("User deleted");
} catch (error) {
    console.log("Error to conect/insert on database:", error);
} finally {
    console.log("CLOSE");
    sequelize.close();
}