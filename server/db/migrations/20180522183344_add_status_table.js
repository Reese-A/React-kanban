
exports.up = function(knex, Promise) {
  return knex.schema.createTable('status', (table) => {
    table.increments();
    table.string('name', 50).notNullable().unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('status');
};
