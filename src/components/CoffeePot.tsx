import React from "react";
import pourOver from "../images/pour-over.png";
import { motion } from "framer-motion";

const CoffeePot = () => {
  const [rotate, setRotate] = React.useState(false);

  return (
    <motion.div
      animate={{ rotate: rotate ? 360 : 0 }}
      transition={{ type: "tween", duration: 1 }}
      onClick={() => {
        setRotate(!rotate);
      }}
    >
      <img src={pourOver} alt="pour over coffee" className="coffee" />
    </motion.div>
  );
};

export default CoffeePot;
