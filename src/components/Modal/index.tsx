import React from "react";
import { MdClose } from "react-icons/md";
import "./index.scss";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps {
  content?: React.ReactNode;
  title?: string;
  isOpen: boolean;
  maxWidth?: number;
  maxHeight?: number;
  onClose: () => void;
}

const Modal = ({
  content,
  isOpen,
  onClose,
  title,
  maxWidth,
  maxHeight,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal--main--container"
        >
          <div
            style={{ maxWidth: `${maxWidth}px`, maxHeight: `${maxHeight}px` }}
            className="modal--main--body--container"
          >
            <div className="modal--main--header--container">
              <strong>{title}</strong>
              <MdClose onClick={onClose} />
            </div>
            <div className="modal--main--content--container">{content}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
