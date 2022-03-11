/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex, Promise) {
    await knex.schema
        .createTable('users', function (table) {
            table.uuid("user_id").primary().defaultTo(knex.raw("(UUID())"));
            table.string('first_name').notNullable();
            table.string('surname').notNullable();
            table.string('password').notNullable();
            table.string('password_hash').notNullable();
            table.string('email').notNullable().unique();
            table.string('address').notNullable();
            table.string('phone_number').notNullable().unique();
            table.date('date_of_birth').notNullable();
            table.string('secret_question').notNullable();
            table.string('secret_answer').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('users');
};
