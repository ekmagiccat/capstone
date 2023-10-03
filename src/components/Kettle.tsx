import React from "react";
import waterPour from "../images/waterPour.png";
import { motion } from "framer-motion";

const Kettle = () => {
  const [rotate, setRotate] = React.useState(false);

  return (
    <motion.div
      animate={{ rotate: rotate ? -10 : 10 }}
      transition={{ type: "tween", duration: 1 }}
      onClick={() => {
        setRotate(!rotate);
      }}
    >
      <img src={waterPour} alt="kettle pouring water" id="kettle" />
    </motion.div>
  );
};

export default Kettle;
