const express = require('express');
const pool = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
const port = 5000;

// POST - Add new order
app.post('/submit/order', async (req, res) => {
  const { name, email, cake_type, cake_size, order_date } = req.body;
  try {
    const insertQuery =
      'INSERT INTO OurOrders(name, email, cake_type, cake_size, order_date) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(insertQuery, [name, email, cake_type, cake_size, order_date]);
    res.send('Order submitted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error submitting order');
  }
});

// GET - Fetch all orders
app.get('/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM OurOrders');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving orders');
  }
});

// DELETE - Delete an order by ID
app.delete('/orders/:order_id', async (req, res) => {
  const { order_id } = req.params;
  try {
    await pool.query('DELETE FROM OurOrders WHERE order_id = $1', [order_id]);
    res.send('Order deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting order');
  }
});

// PUT - Update an order by ID
app.put('/orders/:order_id', async (req, res) => {
  const { order_id } = req.params;
  const { name, email, cake_type, cake_size, order_date } = req.body;
  try {
    const updateQuery =
      'UPDATE OurOrders SET name = $1, email = $2, cake_type = $3, cake_size = $4, order_date = $5 WHERE order_id = $6';
    await pool.query(updateQuery, [name, email, cake_type, cake_size, order_date, order_id]);
    res.send('Order updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating order');
  }
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Server is running on http://localhost:${port}`);
});
