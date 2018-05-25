
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {id: 1, name: 'Low'},
        {id: 2, name: 'Medium'},
        {id: 3, name: 'High'},
        {id: 4, name: 'Blocker'},
      ]);
    });
};
