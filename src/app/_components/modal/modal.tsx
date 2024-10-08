import React from "react";
import ReactDOM from "react-dom";
import { ModalProps } from "./modal.types";
import { CloseIcon } from "../icons";

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-[10000] w-full h-full"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-[#212226] p-6 rounded-lg z-10 shadow-lg">
        <div className="flex justify-between pb-3 items-center">
          <p className="text-sm text-[#B3BAC4]">{title}</p>
          <button onClick={onClose} className="text-white rounded">
            <CloseIcon fill="#6f7285" />
          </button>
        </div>
        {title && <hr className="pb-2 border-t-base-25" />}
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;