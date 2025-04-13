const knex = require('knex');
const config = require('./knexfile');

const db = knex(config.development);

// Stock model functions
const StockModel = {
    // Create a new stock entry
    async create(stockData) {
        return await db('stocks').insert(stockData);
    },

    // Get all stocks
    async getAll() {
        return await db('stocks').orderBy('date', 'desc');
    },

    // Get single stock by ID
    async getById(id) {
        return await db('stocks')
            .where('id', id)
            .first();
    },

    // Get stocks by symbol
    async getBySymbol(symbol) {
        return await db('stocks')
            .where('stock', symbol)
            .orderBy('date', 'desc');
    },

    // Get latest stock entry by symbol
    async getLatestBySymbol(symbol) {
        return await db('stocks')
            .where('stock', symbol)
            .orderBy('date', 'desc')
            .first();
    },

    // Get stocks for a specific date
    async getByDate(date) {
        return await db('stocks')
            .where('date', date)
            .orderBy('stock');
    },

    // Update a stock entry
    async update(id, stockData) {
        return await db('stocks')
            .where('id', id)
            .update({
                ...stockData,
                updated_at: db.fn.now()
            });
    },

    // Delete a stock entry
    async delete(id) {
        return await db('stocks')
            .where('id', id)
            .del();
    }
};

module.exports = {
    db,
    StockModel
};
