const { Pool, Client } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


const connectDB = async () => {
    try {

        const client = new Client({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
        })


        await client.connect();
        
        // console.log("Connection successful");
        const x = await client.query('SELECT * FROM Breed');
        console.log("Retrieved element");
        console.log(x);
    } catch (err) {
        console.log(err);
    }
}

connectDB();

module.exports = pool;