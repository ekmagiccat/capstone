import React, { useState } from "react";

const GamePlay = () => {
  const [waterValue, setWaterValue] = useState(0);
  const [ratio, setRatio] = useState(0);

  const handleAddWater = () => {
    setWaterValue(waterValue + 5);
  };

  const handleChooseRatio = () => {
    setRatio(ratio);
    }

  const handleWaterValue = () => {
    if (waterValue === 300)
    return "You've reached 300!"
  }

  return (
    <div>
      <h6>Choose ratio of water to coffee:</h6>
      <p>The smaller the ratio, the stonger the cup of coffee.</p>
      <button className="ratio1" onClick={handleChooseRatio}>
        16:1
      </button>
      <button className="ratio2" onClick={handleChooseRatio}>
        17:1
      </button>
      <button className="ratio3" onClick={handleChooseRatio}>
        18:1
      </button>
      <p className="water">{waterValue}</p>
      <button type="button" onClick={handleAddWater}>
        Add Water
      </button>
    </div>
  );
};

export default GamePlay;
