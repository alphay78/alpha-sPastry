const { Pool } = require("pg"); // Import the Pool class from the pg module

// Create a new pool instance with your database connection details
const pool = new Pool({
  user: "mydb", // Database username
  host: "localhost", // Database host
  database: "order", // Database name
  password: "Password", // Database password
  port: 5432, // Default PostgreSQL port
});

// Connect to the database
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack); // Log error if connection fails
  }
  console.log("Database connected successfully"); // Log success message
  client.release(); // Release the client back to the pool
});

// Export the pool instance for use in other modules
module.exports = pool;
