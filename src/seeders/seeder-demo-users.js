'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: "123456", // plain text -> hash password
      firstName: 'John',
      lastName: 'Doe',
      address: "abc",
      gender: "1",
      typeRole: "ROLE",
      keyRole: "R1",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
