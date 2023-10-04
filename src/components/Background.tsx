import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface BackgroundProps {
  children: ReactNode;
  onClick?: () => void;
}

const Background: React.FC<BackgroundProps> = ({ children, onClick }) => {
  return (
    <motion.div className="background" onClick={onClick}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      {children}
    </motion.div>
  );
};

export default Background;
