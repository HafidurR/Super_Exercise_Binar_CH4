'use strict';

const cityData = require('../masterdata/city.json');
// console.log(cityData);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cityDataWithoutId = cityData.map((d) => {
      // return console.log(d.country_id);
      delete d.city_id;

      d.createdAt = new Date();
      d.updatedAt = new Date();
      return d;
    });

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('cities', cityDataWithoutId);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('cities', null);
  }
};
