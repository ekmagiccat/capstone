import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";
import CoffeePot from "./CoffeePot";

const App = () => {
  return (
    <div className="app">
      <Header />
      <CoffeePot />
      <Instructions />
      <GamePlay />
    </div>
  );
};

export default App;
