import React, { useState } from "react";

const GamePlay = () => {
  const [waterValue, setWaterValue] = useState(0);

  const handleAddWater = () => {
    setWaterValue(waterValue + 5);
  };

  return (
    <div>
      <p className="water">{waterValue}</p>
      <button type="button" onClick={handleAddWater}>
        Add Water
      </button>
    </div>
  );
};

export default GamePlay;
