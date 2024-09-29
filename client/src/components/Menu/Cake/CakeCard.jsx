import React from "react";
import ProductCard from "../../Products/ProductCard";
import classes from "./Cake.module.css";
import { products } from "./CakeData";

function CakeCard({ title, category = "" }) {
  console.log("Category Prop:", category);
  console.log("Products List:", products);

  // Filter products based on the provided category
  const filteredProducts = products.filter((product) => {
    return (
      product.category &&
      typeof product.category === "string" &&
      product.category.toLowerCase() === category.toLowerCase()
    );
  });

  return (
    <div className={classes.cakeCard}>
      <div className={classes.drink_card}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((data) => (
            <ProductCard
              key={data.id} // Use a unique id instead of index for key
              image={data.image}
              title={data.title}
              price={data.price}
              desc={data.desc}
            />
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CakeCard;
