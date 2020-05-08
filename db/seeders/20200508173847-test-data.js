'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Parks', [
     {
       parkName: 'Robertson Family Park',
       city: 'Huntsville',
       provinceState: 'Alabama',
       country: 'United States',
       opened: new Date(),
       size: '500 sq miles',
       description: 'Family Park open to all',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
},
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Parks', null, {})
  }
};
