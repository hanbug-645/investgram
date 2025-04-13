exports.up = function(knex) {
    return knex.schema.createTable('stocks', table => {
        table.increments('id').primary();
        table.date('date').notNullable();
        table.string('stock').notNullable();
        table.string('name').notNullable();
        table.text('portrait_url');
        table.text('news_url');
        table.decimal('price_change', 10, 2);
        table.text('news_brief');
        table.text('news_image_description');
        table.text('image_url');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('stocks');
};
