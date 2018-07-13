
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {id: 1, name: 'In Queue'},
        {id: 2, name: 'In Progress'},
        {id: 3, name: 'Done'}
      ]);
    });
};
