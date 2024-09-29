import React from "react";
import ProductCard from "../../Products/ProductCard";
import classes from "./Cake.module.css"; // Import CSS module for styling
import { products } from "./CakeData"; // Import product data

function CakeCard({ title, category = "" }) {
  console.log("Category Prop:", category); // Log the category prop
  console.log("Products List:", products); // Log the products list

  // Filter products based on the provided category
  const filteredProducts = products.filter((product) => {
    return (
      product.category && // Ensure category exists
      typeof product.category === "string" && // Check if category is a string
      product.category.toLowerCase() === category.toLowerCase() // Compare category
    );
  });

  return (
    <div className={classes.cakeCard}>
      {" "}
      {/* Wrapper for cake card */}
      <div className={classes.drink_card}>
        {" "}
        {/* Container for product cards */}
        {filteredProducts.length > 0 ? ( // Check if there are filtered products
          filteredProducts.map(
            (
              data // Map through filtered products
            ) => (
              <ProductCard
                key={data.id} // Use a unique id for the key
                image={data.image} // Product image
                title={data.title} // Product title
                price={data.price} // Product price
                desc={data.desc} // Product description
              />
            )
          )
        ) : (
          <p>No products available in this category.</p> // Message if no products found
        )}
      </div>
    </div>
  );
}

export default CakeCard; // Export the CakeCard component
