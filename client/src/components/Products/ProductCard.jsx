import React from "react";
import classes from "./Product.module.css";

function ProductCard({ image, title, price, desc }) {
  const maxLength = 100;

  const renderDescription = (description) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div className={classes.product_card}>
      <img className={classes.product_image} src={image} alt={title} />
      <h3 className={classes.product_name}>{title}</h3>
      <p className={classes.product_description}>{renderDescription(desc)}</p>
      <div className={classes.price_button}>
        <p className={classes.product_price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ProductCard;
