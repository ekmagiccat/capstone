import React, { useState } from "react";
import waterPour from "../images/waterPour.png";
import { motion } from "framer-motion";

const Kettle = () => {
  const [rotate, setRotate] = useState(false);

  const handlePourButtonClick = () => {
    setRotate(!rotate);
  };

  return (
    <div>
      <motion.div
        animate={{ rotate: rotate ? -10 : 10 }}
        transition={{ type: "tween", duration: 1 }}
        onClick={handlePourButtonClick}
      >
        <img src={waterPour} alt="kettle pouring water" id="kettle" />
      </motion.div>
      <button onClick={handlePourButtonClick}>
        {rotate ? "Stop Pouring" : "Start Pouring"}
      </button>
    </div>
  );
};

export default Kettle;
