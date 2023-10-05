import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";

const App = () => {
  return (
    <div className="app">
      <Header />
      <GamePlay />
      <Instructions />
    </div>
  );
};

export default App;
