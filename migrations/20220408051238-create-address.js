'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address_description: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      client_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: "clients",
          key: "id",
        }
      },
      city_id: {
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: "cities",
          key: "id",
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('addresses');
  }
};