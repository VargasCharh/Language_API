/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ratios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ruId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'Words',
        },
        onDelete: 'CASCADE',
      },
      transletId: {
        type: Sequelize.INTEGER,
        references: {
          key: 'id',
          model: 'Words',
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
    await queryInterface.dropTable('Ratios');
  },
};
