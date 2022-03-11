/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
    await knex.schema
        .createTable('users', function (table) {
            table.uuid("user_id").primary().defaultTo(knex.raw("(UUID())"));
            table.string('first_name', 255).notNullable();
            table.string('surname', 255).notNullable();
            table.string('password').notNullable();
            table.string('email').notNullable().unique();
            table.string('address').notNullable();
            table.integer('phone_number').notNullable().unique();
            table.date('date_of_birth').notNullable();
            table.string('secret_question', 255).notNullable();
            table.string('secret_answer', 255).notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());        
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
