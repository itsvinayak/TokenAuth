const { createPool} = require('mysql2')
const pool = createPool({
    // port:process.env.APP_PORT,
    // host:process.env.DB_HOST,
    // user:process.env.DB_USER,
    // password:process.env.DB_PASS,
    // database:process.env.MYSQL_DB,
    // connectionLimit: 10
    port:3306,  // always mention the db port
    host:"localhost",
    user:"root",
    password:"password",
    database:"test",
    // insecureAuth : true, // else you will get error of 'er_not_supported_auth_mode'
    // connectTimeout  : 60 * 60 * 1000, //to resolve the sequence time-out issue .
    // acquireTimeout  : 60 * 60 * 1000,
    // timeout         : 60 * 60 * 1000,
    connectionLimit: 10,
    // multipleStatements: true
})

module.exports = pool;