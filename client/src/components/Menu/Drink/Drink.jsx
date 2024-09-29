import React from "react";
import DrinkCard from "./DrinkCard";
import Banner from "../../Banner/Banner";

function Drink() {
  return (
    <>
      <Banner />
      <>
        <DrinkCard title="Soft Drinks" category="Soft drink" />
        <DrinkCard title="Hot Drinks" category="Hot drink" />
      </>
    </>
  );
}

export default Drink;
