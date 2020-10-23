const mysql = require('mysql2/promise');
const pool  = mysql.createPool({
    host:       'canada.chg7swfu2d5x.ca-central-1.rds.amazonaws.com',
    user:       'server_connection',
    database:   'bcit_ohs2',
    password:    'joDJm0Kd3o5vKXvYn0iY3I',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

class DB {
    DB() {
    }

    async getChemical() {
        const result = await pool.query('SELECT * FROM chemical');
        return result;
        }
       
}
module.exports = DB;
