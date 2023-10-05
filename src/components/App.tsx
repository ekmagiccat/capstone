import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";
import MugPopUp from "./MugPopUp";

const App = () => {
  return (
    <div className="app">
      <Header />
      <GamePlay />
      {/* <Instructions /> */}
      <MugPopUp />
    </div>
  );
};

export default App;
