const pool = require('./pool');

async function getAllData() {
    const { rows } = await pool.query('SELECT * FROM plants');
    return rows
}

module.exports = { getAllData }