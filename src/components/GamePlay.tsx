import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import waterPour from "../images/waterPour.png";
import chemex from "../images/chemex.png";

const GamePlay = () => {
  const [waterValue, setWaterValue] = useState(0);
  const [ratio, setRatio] = useState(0);
  const [rotate, setRotate] = useState(false);

  useEffect(() => {
    setWaterValue(0);
  }, [ratio]);

  const handleAddWater = () => {
    const waterLimit = getWaterLimit();

    if (waterValue < waterLimit) {
      const newWaterValue = waterValue + 20;
      setWaterValue(Math.min(newWaterValue, waterLimit));
    }
  };

  const handleChooseRatio = (selectedRatio: number) => {
    setRatio(selectedRatio);

    const waterLimit = getWaterLimit();
    setWaterValue(Math.min(waterValue, waterLimit));
  };

  const handleKettleRotate = () => {
    setRotate(!rotate);
  };

  const handlePourButtonClick = () => {
    handleAddWater();
    handleKettleRotate();
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
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <h6>Choose ratio of water to coffee:</h6>
            <p>The smaller the ratio, the stronger the cup of coffee.</p>
            <div className="nav-bar">
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={() => handleChooseRatio(16)}
              >
                16:1
              </button>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={() => handleChooseRatio(17)}
              >
                17:1
              </button>
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={() => handleChooseRatio(18)}
              >
                18:1
              </button>
            </div>
            <p className="water">{waterValue}</p>

            <button onClick={handlePourButtonClick}>
              {rotate ? "Stop Pouring" : "Start Pouring"}
            </button>
          </div>
          <div className="col">
            <motion.div
              animate={{ rotate: rotate ? -10 : 10 }}
              transition={{ type: "tween", duration: 0.5 }}
              // onClick={handlePourButtonClick}
            >
              <img src={waterPour} alt="kettle pouring water" id="kettle" />
            </motion.div>
            <img src={chemex} alt="pour over coffee" id="chemex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
