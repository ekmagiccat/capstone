import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./Background";
import Modal from "./Modal";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="app">
      <Header />
      <GamePlay />
      <Instructions />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal
      </motion.button>
    </div>
  );
};

export default App;
