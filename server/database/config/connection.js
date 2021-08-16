require('env2')('./config.env');
const { Pool } = require('pg'); 

const { DB_URL } = process.env;


if(! DB_URL) throw new Error("database not found");

const options = {
    connectionString: DB_URL,
    ssl: false
};

module.exports = new Pool(options);