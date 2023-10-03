import React from "react";
import chemex from "../images/chemex.png";
import waterPour from "../images/waterPour.png";
import { motion } from "framer-motion";

const CoffeePot = () => {
  const [rotate, setRotate] = React.useState(false);

  return (
    <motion.div
      animate={{ rotate: rotate ? 360 : 20 }}
      transition={{ type: "tween", duration: 1 }}
      onClick={() => {
        setRotate(!rotate);
      }}
    >
      <img src={waterPour} alt="kettle pouring water" />
      <img src={chemex} alt="pour over coffee" className="chemex" />
    </motion.div>
  );
};

export default CoffeePot;
