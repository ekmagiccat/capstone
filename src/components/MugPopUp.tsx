import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import mug from "../images/coffeeMug.png";

interface MugPopUpProps {
  setOpenModal: boolean;
}

const MugPopUp: React.FC<MugPopUpProps> = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div>
//       <img
//         src={mug}
//         alt="yellow coffee mug that says 'business'"
//         data-bs-toggle="modal"
//         className="mugImage"
//         data-bs-target="#coffeeMug"
//       />
//       <div
//         className="modal fade"
//         id="coffeeMug"
//         tabIndex={-1}
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-body">
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//               <img src={mug} className="d-block w-100" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default MugPopUp;
