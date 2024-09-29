import React, { useState } from "react";
import "./ContactUs.css";

const OrderForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cakeType: "",
    cakeSize: "",
    orderDate: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update specific field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Debug: Log current form data
    console.log("Current Form Data:", formData);

    // Reformat data for backend compatibility
    const reorderedFormData = {
      name: formData.name,
      email: formData.email,
      cake_type: formData.cakeType, // Match backend field name
      cake_size: formData.cakeSize, // Match backend field name
      order_date: formData.orderDate,
    };

    console.log("Order Data Submitted:", reorderedFormData);

    try {
      // Send POST request to server
      const response = await fetch("http://localhost:5000/submit/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reorderedFormData), // Send data as JSON
      });

      console.log("Order placed successfully!");

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        cakeType: "",
        cakeSize: "",
        orderDate: "",
      });
    } catch (error) {
      // Log any error during submission
      console.error("Error submitting the order:", error);
    }
  };

  return (
    <div className="order-container">
      <h1 className="order-title">Place Your Order!</h1>
      <p className="order-description">
        Fill out the form below to order your favorite cake!
      </p>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required // Ensure this field is required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <select
            name="cakeType"
            value={formData.cakeType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Cake Type
            </option>
            <option value="Chocolate Cake">Chocolate Cake</option>
            <option value="Vanilla Cake">Vanilla Cake</option>
            <option value="Red Velvet Cake">Red Velvet Cake</option>
            <option value="Lemon Cake">Lemon Cake</option>
            <option value="Carrot Cake">Carrot Cake</option>
          </select>
        </div>
        <div className="form-group">
          <select
            name="cakeSize"
            value={formData.cakeSize}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Cake Size
            </option>
            <option value="1 kilo">1 kilo</option>
            <option value="2 kilos">2 kilos</option>
            <option value="3 kilos">3 kilos</option>
            <option value="4 kilos">4 kilos</option>
            <option value="5 kilos">5 kilos</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
