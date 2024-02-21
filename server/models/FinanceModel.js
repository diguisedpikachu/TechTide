const { Pool } = require('pg');

const myURI = 'postgres://wrxqxmfc:2FUhiKB71-HRM0zEIPRb7HJvejZTxXsp@stampy.db.elephantsql.com/wrxqxmfc';
 
const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};