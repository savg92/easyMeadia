'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Users', [
        {
          name: 'admin',
          email: 'admin@easymedia.com',
          password: 'adminEasymedia',
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'John Doe',
          email: 'jdoe@easymedia.com',
          password: 'jdoeEasymedia',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
