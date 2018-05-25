exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1,
          title: 'Write more code',
          priority: '2',
          status: '2',
          created_by: '1',
          assigned_to: '2'
        },
        {
          id: 2,
          title: 'Add styles',
          priority: '1',
          status: '2',
          created_by: '2',
          assigned_to: '3'
        },
        {
          id: 3,
          title: 'Refactor old code',
          priority: '3',
          status: '2',
          created_by: '3',
          assigned_to: '4'
        },
        {
          id: 4,
          title: 'Build more back-end routes',
          priority: '1',
          status: '1',
          created_by: '4',
          assigned_to: '1'
        },
        {
          id: 5,
          title: 'Implement Redux',
          priority: '2',
          status: '1',
          created_by: '1',
          assigned_to: '3'
        },
        {
          id: 6,
          title: 'Wireframe project',
          priority: '3',
          status: '3',
          created_by: '4',
          assigned_to: '1'
        },
      ]);
    });
};