import React from "react";

export const ImageModal = ({ img, setOpenModal }) => {
  const closeModal = (e) => {
    setOpenModal(false);
  };
  return (
    <div
      className="dialog"
    
      onClick={(e) => closeModal(e)}
    >
      <div className="modal ">
        <button
          className="modal__close-btn uppercase lt-spacing-4"
          onClick={() => setOpenModal(false)}
        >
          Close
        </button>
        <img
          className="modal__img"
          onClick={(e) => e.stopPropagation()}
          src={img}
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};
