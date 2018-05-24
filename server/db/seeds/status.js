
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {id: 1, status: 'In Queue'},
        {id: 2, status: 'In Progress'},
        {id: 3, status: 'Done'}
      ]);
    });
};
