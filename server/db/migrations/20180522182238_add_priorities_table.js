
exports.up = function(knex, Promise) {
  return knex.schema.createTable('priorities', (table) => {
    table.increments();
    table.string('priority', 50).notNullable().unique();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('priorities');
};
