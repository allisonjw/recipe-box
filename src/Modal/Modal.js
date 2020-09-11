import React from 'react';
import './Modal.scss';

const Modal = ({ children, show, setShow }) => {
  const content = show && (
    <div className="modal_overlay">
      <div className="modal">
        <button
          className="modal_close"
          type="modal_button"
          onClick={() => setShow(false)}
        >
          X
        </button>
        <div className="modal_body">{children}</div>
      </div>
    </div>
  )

  return content
}

export default Modal