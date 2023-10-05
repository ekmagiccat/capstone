import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import mug from "../images/coffeeMug.png";

interface ModalProps {
  handleClose: () => void;
  modalOpen?: boolean;
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
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="btn btn-outline-light btn-lg"
          id="close"
          onClick={handleClose}
        >
          Close
        </button>
        <div className="mugModal">
          <img src={mug} alt="coffee mug" />
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
