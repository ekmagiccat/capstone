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
    const newWaterValue = waterValue + 20;

    if (newWaterValue <= waterLimit) {
      setWaterValue(newWaterValue);
    } else {
      alert("You've reached the needed water amount!");
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

  const handleGrowCircle = () => {
    const circle = document.getElementById("circle");

    if (circle) {
      circle.style.width = "135px";
      circle.style.height = "135px";
      circle.style.top = "220px";
      circle.style.left = "100px";
    }
  };

  const handlePourButtonClick = () => {
    handleAddWater();
    handleKettleRotate();
    handleGrowCircle();
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
    <div className="game">
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-3">
              <h3 className="display-6">Choose a ratio of water to coffee:</h3>
              <h4>The smaller the ratio, the stronger the cup of coffee.</h4>
              <div>
                <button
                  className="btn btn-dark btn-lg ratioBtn"
                  type="button"
                  onClick={() => handleChooseRatio(16)}
                >
                  16:1
                </button>
                <button
                  className="btn btn-dark btn-lg ratioBtn"
                  type="button"
                  onClick={() => handleChooseRatio(17)}
                >
                  17:1
                </button>

                <button
                  className="btn btn-dark btn-lg ratioBtn"
                  type="button"
                  onClick={() => handleChooseRatio(18)}
                >
                  18:1
                </button>
              </div>
              <br />
              <p className="water">{waterValue}g water</p>
              <div className="smallText">to 20g coffee grounds</div>
              <br />
              <button
                className="btn btn-dark btn-lg"
                type="button"
                onClick={handlePourButtonClick}
              >
                Add Water
              </button>
            </div>
            <div className="col">
              <div className="p-3">
                <motion.div
                  animate={{ rotate: rotate ? -10 : 10 }}
                  transition={{ type: "tween", duration: 0.5 }}
                >
                  <img src={waterPour} alt="kettle pouring water" id="kettle" />
                </motion.div>
                <div className="image-container">
                  <div className="circleOverlay" id="circle"></div>
                  <img src={chemex} alt="pour over coffee" id="chemex" />
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
