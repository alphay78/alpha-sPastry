const { Pool } = require('pg');

// Create a new pool instance with your database connection details
const pool = new Pool({
  user: 'mydb',
  host: 'localhost',
  database: 'order',
  password: "Password",
  port: 5432, // Default PostgreSQL port
});

pool.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    console.log('Database connected successfully');
    client.release();
  });
  

module.exports = pool;