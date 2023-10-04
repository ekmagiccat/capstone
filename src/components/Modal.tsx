import React from "react";
import Background from "./Background";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Modal.css";

// interface ModalProps {
//   onClose?: () => void;
//   text?: string;
//   modalOpen?: boolean;
// }

// const dropIn = {
//   hidden: {
//     y: "-100vh",
//     opacity: 0,
//   },
//   visible: {
//     y: "0",
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       damping: 25,
//       stiffness: 500,
//     },
//   },
//   exit: {
//     y: "100vh",
//     opacity: 0,
//   },
// };

// const Modal: React.FC<ModalProps> = ({ handleClose, text }) => {
//   console.log("handleClose:", handleClose);

//   return (
//     <Background onClick={handleClose}>
//       <motion.div
//         onClick={(e) => e.stopPropagation()}
//         className="modal"
//         variants={dropIn}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
//         <p>{text}</p>
//         <button onClick={handleClose}>Close</button>
//       </motion.div>
//     </Background>
//   );
// };

// export default Modal;
const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(modalOpen);
  };

  console.log(toggleModal);
  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      <p>Hello</p>
    </div>
  );
};

export default Modal;
