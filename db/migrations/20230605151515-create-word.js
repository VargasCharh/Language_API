/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Words', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      word: {
        type: Sequelize.STRING,
      },
      langId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'Languages',
        },
        onDelete: 'cascade',
      },
      catId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'Categories',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Words');
  },
};
