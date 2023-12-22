'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('users', {
      type: 'unique',
      fields: ['email'],
      name: 'unique_email_constraint'
    });

    await queryInterface.addConstraint('users', {
      type: 'unique',
      fields: ['username'],
      name: 'unique_username_constraint'
    });
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('users', 'unique_username_constraint');
    await queryInterface.removeConstraint('users', 'unique_email_constraint');
  }
};
