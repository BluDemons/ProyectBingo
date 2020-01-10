exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("cartilla", function(table) {
      table.increments("id");
      table.string("cartilla_codigo").unique();
      table.string("cartilla_numeros");
    })

    .createTable("persona", function(table) {
      table.increments("id");
      table.string("persona_nombre");
      table.string("tipo_persona");
      table
        .integer("cartilla_id")
        .references("id")
        .inTable("cartilla");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("persona").dropTableIfExists("cartilla");
};
