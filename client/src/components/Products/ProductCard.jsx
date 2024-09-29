import React from "react"; // Importing React library
import classes from "./Product.module.css"; // Importing CSS module for styling

function ProductCard({ image, title, price, desc }) {
  const maxLength = 100; // Maximum length for the description

  // Function to render a shortened description if it exceeds the max length
  const renderDescription = (description) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "..."; // Truncate and add ellipsis
    }
    return description; // Return full description if within limit
  };

  return (
    <div className={classes.product_card}>
      {" "}
      {/* Main card container */}
      <img className={classes.product_image} src={image} alt={title} />{" "}
      {/* Product image */}
      <h3 className={classes.product_name}>{title}</h3> {/* Product title */}
      <p className={classes.product_description}>
        {renderDescription(desc)}
      </p>{" "}
      {/* Product description */}
      <div className={classes.price_button}>
        {" "}
        {/* Container for price */}
        <p className={classes.product_price}>${price.toFixed(2)}</p>{" "}
        {/* Formatted price */}
      </div>
    </div>
  );
}

export default ProductCard; // Exporting the ProductCard component for use in other parts of the application
