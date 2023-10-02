import React, { useState } from "react";

const GamePlay = () => {
  const [waterValue, setWaterValue] = useState(0);
  const [ratio, setRatio] = useState(0);

  const handleAddWater = () => {
    const newWaterValue = waterValue + 10;
    const waterLimit = getWaterLimit();
    setWaterValue(Math.min(newWaterValue, waterLimit));
  };

  const handleChooseRatio = (selectedRatio: number) => {
    setRatio(selectedRatio);

    const waterLimit = getWaterLimit();
    setWaterValue(Math.min(waterValue, waterLimit));
  };

  const getWaterLimit = () => {
    if (ratio === 16) {
      return 320;
    } else if (ratio === 17) {
      return 340;
    } else if (ratio === 18) {
      return 360;
    }
    return 0;
  };

  return (
    <div>
      <h6>Choose ratio of water to coffee:</h6>
      <p>The smaller the ratio, the stronger the cup of coffee.</p>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={() => handleChooseRatio(16)}
      >
        16:1
      </button>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={() => handleChooseRatio(17)}
      >
        17:1
      </button>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={() => handleChooseRatio(18)}
      >
        18:1
      </button>
      <p className="water">{waterValue}</p>
      <button
        className="btn btn-outline-success"
        type="button"
        onClick={handleAddWater}
      >
        Add Water
      </button>
    </div>
  );
};

export default GamePlay;
