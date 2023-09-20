'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        notNull: true,
        notEmpty: true,
        validate: {
          notNull: {
            msg: 'Name is required'
          },
          notEmpty: {
            msg: 'Name is required'
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false,
        notEmpty: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'Email address must be valid'
          },
          notNull: {
            msg: 'Email address is required'
          },
          notEmpty: {
            msg: 'Email address is required'
          },
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        validate: {
          notNull: {
            msg: 'Password is required'
          },
          notEmpty: {
            msg: 'Password is required'
          },
          len: {
            args: [8],
            msg: 'Password must be at least 8 characters'
          },
        },
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        defaultValue: 'user',
        validate: {
          isIn: [['user', 'admin']],
          notNull: {
            msg: 'Role is required'
          },
          notEmpty: {
            msg: 'Role is required'
          },
          defaultValue: {
            msg: 'Role is required'
          },
        },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};