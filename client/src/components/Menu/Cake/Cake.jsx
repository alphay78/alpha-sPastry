import React from "react";
import CakeCard from "./CakeCard";
import Banner from "../../Banner/Banner";
import classes from "./Cake.module.css"; // Ensure this is correctly imported

function Cake() {
  return (
    <>
      <Banner />
      <div className={classes.cakeContainer}>
        <h1 className={classes.categoryTitle}>Cheese Cake</h1>
        <CakeCard category="Cheese Cake" />

        <h1 className={classes.categoryTitle}>Chocolate Cake</h1>
        <CakeCard category="Chocolate Cake" />

        <h1 className={classes.categoryTitle}>Torta</h1>
        <CakeCard category="Torta" />
      </div>
    </>
  );
}

export default Cake;
