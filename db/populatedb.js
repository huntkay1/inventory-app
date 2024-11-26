const { Client } = require('pg');
require('dotenv').config(); //loads enviornemt variables from .env


const SQL = `
CREATE TABLE IF NOT EXISTS plants (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product VARCHAR ( 255 ),
    description VARCHAR ( 500 ),
    category VARCHAR ( 50 ),
    price INT,
    quantity INT
);

INSERT INTO plants (product, description, category, price, quantity)
VALUES 
    ('Monstera', 'A tropical plant with massive leaves split leaves', 'plant', 39.99, 999),
    ('Cactus', 'A desert plant that is prickly and tall', 'plant', 14.99, 999);
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();