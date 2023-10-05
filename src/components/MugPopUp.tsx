import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import mug from "../images/coffeeMug.png";

interface MugPopUpProps {
  onClose?: () => void;
  imgUrl: string;
}

const MugPopUp: React.FC<MugPopUpProps> = ({ imgUrl, onClose }) => {
  return (
    <motion.div className="modal">
      <div className="modal-content">
        <img src={imgUrl} alt="coffee mug" />
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
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
