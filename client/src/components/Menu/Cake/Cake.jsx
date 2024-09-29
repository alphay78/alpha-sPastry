import React from "react"; // Importing React library
import CakeCard from "./CakeCard"; // Importing the CakeCard component
import Banner from "../../Banner/Banner"; // Importing the Banner component
import classes from "./Cake.module.css"; // Importing CSS module for styling

function Cake() {
  return (
    <>
      <Banner /> {/* Render the banner at the top */}
      <div className={classes.cakeContainer}>
        {" "}
        {/* Container for cakes */}
        <h1 className={classes.categoryTitle}>Cheese Cake</h1>{" "}
        {/* Title for Cheese Cake category */}
        <CakeCard category="Cheese Cake" />{" "}
        {/* Render CakeCard for Cheese Cake */}
        <h1 className={classes.categoryTitle}>Chocolate Cake</h1>{" "}
        {/* Title for Chocolate Cake category */}
        <CakeCard category="Chocolate Cake" />{" "}
        {/* Render CakeCard for Chocolate Cake */}
        <h1 className={classes.categoryTitle}>Torta</h1>{" "}
        {/* Title for Torta category */}
        <CakeCard category="Torta" /> {/* Render CakeCard for Torta */}
      </div>
    </>
  );
}

export default Cake; // Export the Cake component
