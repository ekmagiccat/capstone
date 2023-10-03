import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";
import Kettle from "./Kettle";
import PourOver from "./PourOver";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Kettle />
      <PourOver />
      <Instructions />
      <GamePlay />
    </div>
  );
};

export default App;
