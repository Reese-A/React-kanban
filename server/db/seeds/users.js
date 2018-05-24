
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Steve Rogers'},
        {id: 2, name: 'Tony Stark'},
        {id: 3, name: 'Thor Odinson'},
        {id: 4, name: 'Nick Fury'}
      ]);
    });
};
