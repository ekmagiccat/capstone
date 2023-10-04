import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import chemex from "../images/chemex.png";

const PourOver = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img src={chemex} alt="pour over coffee" id="chemex" />
      <div className="circle overlay">circle</div>
    </div>
  );
};

export default PourOver;
