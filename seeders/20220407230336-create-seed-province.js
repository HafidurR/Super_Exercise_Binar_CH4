'use strict';

const provinceData = require('../masterdata/province.json');
// console.log(provinceData);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const provinceDataWithoutId = provinceData.map((d) => {
      // return console.log(d.country_id);
      delete d.province_id;

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
    await queryInterface.bulkInsert('provinces', provinceDataWithoutId);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('provinces', null);
  }
};
