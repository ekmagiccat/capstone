import React from "react";
import Header from "./Header";
import GamePlay from "./GamePlay";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="app">
      <Header />
      <GamePlay />
      <div className="modalButton">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button btn btn-dark btn-lg"
          onClick={() => (modalOpen ? close() : open())}
        >
          Enjoy a cup of coffee!
        </motion.button>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default App;
