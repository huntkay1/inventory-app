const pool = require('./pool');

async function getAllData() {
    const { rows } = await pool.query('SELECT * FROM plants');
    return rows
}

async function addDataEntry(entry) {
    await pool.query(`INSERT INTO plants (product, description, category, price, quantity) VALUES ('${entry.product}', '${entry.description}', '${entry.category}', '${Number(entry.price)}', '${Number(entry.quantity)}')`)
}

module.exports = { getAllData, addDataEntry }