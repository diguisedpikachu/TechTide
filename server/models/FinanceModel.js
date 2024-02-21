const { Pool } = require('pg');

const myURI = 'MAKE A URL STRING';
 
const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};