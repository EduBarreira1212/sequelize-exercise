export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  }
};