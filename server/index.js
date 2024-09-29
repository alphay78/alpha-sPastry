const express = require("express"); // Import Express framework
const pool = require("./db"); // Import database connection pool
const cors = require("cors"); // Import CORS middleware for cross-origin requests
const bodyParser = require("body-parser"); // Import body-parser middleware (not used in this code)

const app = express(); // Create an Express application
app.use(cors({ origin: true })); // Enable CORS for all origins
app.use(express.json()); // Parse incoming JSON requests
const port = 5000; // Define the port number for the server

// POST - Add new order
app.post("/submit/order", async (req, res) => {
  const { name, email, cake_type, cake_size, order_date } = req.body; // Destructure request body
  try {
    const insertQuery =
      "INSERT INTO OurOrders(name, email, cake_type, cake_size, order_date) VALUES ($1, $2, $3, $4, $5)"; // SQL query to insert a new order
    await pool.query(insertQuery, [
      name,
      email,
      cake_type,
      cake_size,
      order_date,
    ]); // Execute the query
    res.send("Order submitted successfully"); // Send success response
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send("Error submitting order"); // Send error response
  }
});

// GET - Fetch all orders
app.get("/orders", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM OurOrders"); // SQL query to fetch all orders
    res.json(result.rows); // Send the result as JSON
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send("Error retrieving orders"); // Send error response
  }
});

// DELETE - Delete an order by ID
app.delete("/orders/:order_id", async (req, res) => {
  const { order_id } = req.params; // Extract order ID from request parameters
  try {
    await pool.query("DELETE FROM OurOrders WHERE order_id = $1", [order_id]); // SQL query to delete the order
    res.send("Order deleted successfully"); // Send success response
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send("Error deleting order"); // Send error response
  }
});

// PUT - Update an order by ID
app.put("/orders/:order_id", async (req, res) => {
  const { order_id } = req.params; // Extract order ID from request parameters
  const { name, email, cake_type, cake_size, order_date } = req.body; // Destructure request body
  try {
    const updateQuery =
      "UPDATE OurOrders SET name = $1, email = $2, cake_type = $3, cake_size = $4, order_date = $5 WHERE order_id = $6"; // SQL query to update the order
    await pool.query(updateQuery, [
      name,
      email,
      cake_type,
      cake_size,
      order_date,
      order_id,
    ]); // Execute the query
    res.send("Order updated successfully"); // Send success response
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).send("Error updating order"); // Send error response
  }
});

// Start the server
app.listen(port, (err) => {
  if (err) console.log(err); // Log any error starting the server
  console.log(`Server is running on http://localhost:${port}`); // Log the server URL
});
