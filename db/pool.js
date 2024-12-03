const { Pool } = require('pg');
require('dotenv').config();

module.exports = new Pool({
    host: 'localhost',
    user: 'Kayla.',
    database: 'inventory',
    password: process.env.PASSWORD,
    port: 5432
})