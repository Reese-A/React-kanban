
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
    table.increments();
    table.string('title', 255).notNullable();
    table.integer('priority').notNullable().unsigned();
    table.foreign('priority').references('id').inTable('priorities');
    table.integer('status').notNullable().unsigned();
    table.foreign('status').references('id').inTable('status');
    table.string('created_by', 100).notNullable().unsigned();
    table.foreign('created_by').references('name').inTable('users');
    table.string('assigned_to', 100).unsigned();
    table.foreign('assigned_to').references('name').inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards');
};
