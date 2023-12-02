import React from "react";
import '../styles/Modal.css';

function Modal({ children }) {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
}

export default Modal;