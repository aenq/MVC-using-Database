const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host : 'localhost',
    database : 'intro_db',
    password : 'postgres',
    port : 1234
});

module.exports = pool; 