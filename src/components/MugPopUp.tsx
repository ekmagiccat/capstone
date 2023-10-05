import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/modal";
import mug from "../images/coffeeMug.png";

const MugPopUp = () => {
  return (
    <div>
      <img
        src={mug}
        alt="yellow coffee mug that says 'business'"
        data-bs-toggle="modal"
        className="w-25 h-35"
        data-bs-target="#coffeeMug"
      />
      <div
        className="modal fade"
        id="coffeeMug"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <img src={mug} className="d-block w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MugPopUp;
