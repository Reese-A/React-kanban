
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('priorities').del()
    .then(function () {
      // Inserts seed entries
      return knex('priorities').insert([
        {id: 1, priority: 'Low'},
        {id: 2, priority: 'Medium'},
        {id: 3, priority: 'High'},
        {id: 4, priority: 'Blocker'},
      ]);
    });
};