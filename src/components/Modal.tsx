import React from "react";
import Background from "./Background";
import { motion } from "framer-motion";

interface ModalProps {
  handleClose: () => void;
  text: string;
}
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 0,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({ handleClose, text }) => {
  return (
    <Background onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
        >
          Close
        </button>
      </motion.div>
    </Background>
  );
};

export default Modal;
