import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";
import PourOver from "./PourOver";

const App = () => {
  return (
    <div className="app">
      <Header />
      <GamePlay />
      <PourOver />
      <Instructions />
    </div>
  );
};

export default App;
