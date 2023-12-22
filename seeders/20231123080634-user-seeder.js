'use strict';
/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

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
    const hashedPassword = await bcrypt.hash('john123', 10);

    return queryInterface.bulkInsert('users', [
      {
        name: 'john',
        address: 'Jakarta',
        email: 'john@example.com',
        username: 'johndoe',
        password: hashedPassword,
        phone: '08123456789',
        url_profile: 'https://static9.depositphotos.com/1074452/1184/i/450/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      const condition = {
        // Add conditions based on the seeded data (e.g., email or username)
        // For example:
        username: 'johndoe'
      };
      // await queryInterface.bulkDelete('likes', null, {});

     // Then remove records from the parent table (e.g., users)
      await queryInterface.bulkDelete('users', condition, {});
  }
};
