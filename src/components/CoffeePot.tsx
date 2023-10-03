import React from "react";
import pourOver from "../images/pour-over.png";

const CoffeePot = () => {
  return (
    <div>
      <p>Coffee Pot</p>
      <img src={pourOver} alt="pour over coffee" className="coffee" />
    </div>
  );
};

export default CoffeePot;
