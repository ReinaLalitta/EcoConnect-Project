const {
    createPool
} = require('mysql');

const pool = createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'Lalitta@#&2003',
    database:'ecoconnect',
});

module.exports = pool;

