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
          created_by: 'John',
          assigned_to: 'Bob'
        },
        {
          id: 2,
          title: 'Add styles',
          priority: '1',
          status: '2',
          created_by: 'Bob',
          assigned_to: 'Jane'
        },
        {
          id: 3,
          title: 'Refactor old code',
          priority: '3',
          status: '2',
          created_by: 'Jane',
          assigned_to: 'Susan'
        },
        {
          id: 4,
          title: 'Build more back-end routes',
          priority: '1',
          status: '1',
          created_by: 'Susan',
          assigned_to: 'John'
        },
        {
          id: 5,
          title: 'Implement Redux',
          priority: '2',
          status: '1',
          created_by: 'John',
          assigned_to: 'Jane'
        },
        {
          id: 6,
          title: 'Wireframe project',
          priority: '3',
          status: '3',
          created_by: 'Susan',
          assigned_to: 'John'
        },
      ]);
    });
};