'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('clients', [{
      name: 'M. Hafidurrohman',
      ktp_number: '3513120404010018',
      npwp_number: '01.855.081.4-412.000',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Siblil Aula',
      ktp_number: '3513120404010021',
      npwp_number: '02.855.081.4-412.0120',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Abdul Aziz',
      ktp_number: '3513120404010020',
      npwp_number: '03.855.081.4-412.000',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('clients', null, {});
     */
    await queryInterface.bulkDelete('clients', null, {});
  }
};
