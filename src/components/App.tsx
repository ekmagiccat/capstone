import React from "react";
import Header from "./Header";
import GamePlay from "./GamePlay";
import MugPopUp from "./MugPopUp";
import { useState } from "react";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    console.log("Opening modal");
    setModalOpen(true);
  };

  return (
    <div className="app">
      <Header />
      <GamePlay />
      <h6>Get your coffee here</h6>
      <button className="openModalBtn" onClick={handleOpenModal}>
        Open
      </button>

      {modalOpen && <MugPopUp setOpenModal={setModalOpen} />}
    </div>
  );
};

export default App;
