import React from "react";
import chemex from "../images/chemex.png";
import { motion } from "framer-motion";

const PourOver = () => {
  return (
    <div>
      <motion.div>
        <img src={chemex} alt="pour over coffee" id="chemex" />
      </motion.div>
    </div>
  );
};

export default PourOver;
