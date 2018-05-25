
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'John'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Jane'},
        {id: 4, name: 'Susan'}
      ]);
    });
};
