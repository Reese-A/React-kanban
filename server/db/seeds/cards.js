exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1,
          title: 'Protect Earth',
          priority: 3,
          status: 2,
          created_by: 'Nick Fury',
          assigned_to: 'Steve Rogers'
        },
        {
          id: 2,
          title: 'Fix Quinjet',
          priority: 2,
          status: 3,
          created_by: 'Steve Rogers',
          assigned_to: 'Tony Stark'
        },
        {
          id: 3,
          title: 'Fight Thanos',
          priority: 4,
          status: 1,
          created_by: 'Tony Stark',
          assigned_to: 'Thor Odinson'
        },
        {
          id: 4,
          title: "Recruit Spider-man",
          priority: 1,
          status: 1,
          created_by: 'Nick Fury',
          assigned_to: 'Tony Stark'
        },
        {
          id: 5,
          title: 'Find Infinity Stones',
          priority: 3,
          status: 3,
          created_by: 'Thor Odinson',
          assigned_to: 'Steve Rogers'
        },
      ]);
    });
};