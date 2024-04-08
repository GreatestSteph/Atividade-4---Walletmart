import mysql from 'mysql2/promise'

export default async function conecta(){
    if (global.poolConexos){
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