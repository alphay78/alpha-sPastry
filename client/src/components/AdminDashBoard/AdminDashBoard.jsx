import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import axios from 'axios';

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cake_type: '',
    cake_size: '',
    order_date: ''
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/orders');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data);
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Handle Delete Order
// Handle Delete Order
const deleteOrder = async (order_id) => {
  if (!order_id) {
    console.error('Invalid ID for deletion');
    return;
  }
  
  try {
    await axios.delete(`http://localhost:5000/orders/${order_id}`);
    setOrders(orders.filter((order) => order.order_id !== order_id)); // Remove the order from state after deletion
  } catch (err) {
    console.error('Error deleting order:', err);
  }
};


  // Handle Edit Order
  const handleEdit = (order) => 
    {
      console.log("update button clicked")
    setEditingOrder(order.order_id);
    setFormData({
      name: order.name,
      email: order.email,
      cake_type: order.cake_type,
      cake_size: order.cake_size,
      order_date: order.order_date,
    });
  };

  // Handle Update Order
  const updateOrder = async () => {
    try {
      await axios.put(`http://localhost:5000/orders/${editingOrder}`, formData);
      setOrders(orders.map((order) => (order.order_id === editingOrder ? { ...order, ...formData } : order)));
      setEditingOrder(null);
      setFormData({ name: '', email: '', cake_type: '', cake_size: '', order_date: '' });
    } catch (err) {
      console.error('Error updating order:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching orders: {error}</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Cake Type</th>
            <th>Cake Size</th>
            <th>Order Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.cake_type}</td>
              <td>{order.cake_size}</td>
              <td>{order.order_date}</td>
              <td>
                <button onClick={() => deleteOrder(order.order_id)} className='btn1'>Delete</button>
                <button onClick={() => handleEdit(order)} className='btn2'>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingOrder && (
        <div className="edit-form">
          <h2>Edit Order</h2>
          <form>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="cake_type" value={formData.cake_type} onChange={handleChange} placeholder="Cake Type" />
            <input type="text" name="cake_size" value={formData.cake_size} onChange={handleChange} placeholder="Cake Size" />
            <input type="date" name="order_date" value={formData.order_date} onChange={handleChange} />
            <button type="button" onClick={updateOrder}>Update</button>
            <button type="button" onClick={() => setEditingOrder(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
