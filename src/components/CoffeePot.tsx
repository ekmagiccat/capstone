import React from "react";
import chemex from "../images/chemex.jpg";

const CoffeePot = () => {
  return (
    <div>
      <p>CoffeePot</p>
      <img src={chemex} alt="pour over coffee" className="coffee" />
    </div>
  );
};

export default CoffeePot;
