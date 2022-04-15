'use strict';

const countryData = require('../masterdata/country.json');
// console.log(countryData);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const countryDataWithoutId = countryData.map((d) => {
      // return console.log(d.country_id);
      delete d.country_id;

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
    await queryInterface.bulkInsert('countries', countryDataWithoutId);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('countries', null);
  }
};
