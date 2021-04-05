
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
      table.increments('id').primary();
      table.string('name').notNullable()
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
