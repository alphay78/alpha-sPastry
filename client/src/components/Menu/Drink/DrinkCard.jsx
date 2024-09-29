import React from "react";
import ProductCard from "../../Products/ProductCard";
import classes from "./Drink.module.css";
import { products } from "./DrinkData";

function DrinkCard({ title, category = "" }) {
  console.log("Category Prop:", category); 
  console.log("Products List:", products); 

  const filteredProducts = products.filter((product) => {
    
    return (
      product.category &&
      typeof product.category === "string" &&
      product.category.toLowerCase() === category.toLowerCase()
    );
  });

  return (
    <div>
      <h1 className={classes.drink__title}>{title}</h1>
      <div className={classes.drink_card}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((data, i) => {
            return (
              <ProductCard
                key={i}
                image={data.image}
                title={data.title}
                price={data.price}
                desc={data.desc}
              />
            );
          })
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default DrinkCard;
