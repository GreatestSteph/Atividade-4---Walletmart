const mysql = require('mysql2/promise');

async function conecta(){
    if (global.poolConexoes){
        return await global.poolConexoes.getConnection();
    }

    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'backend-walletmart',
        password: '',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    })

    global.poolConexoes = pool; 
    return await pool.getConnection();
}

module.exports = conecta;