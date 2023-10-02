import React from "react";
import Header from "./Header";
import Instructions from "./Instructions";
import GamePlay from "./GamePlay";
import { useState } from "react";

const App = () => {
 

  return (
    <div>
      <Header />
      <Instructions />
      <GamePlay />
    </div>
  );
};

export default App;
