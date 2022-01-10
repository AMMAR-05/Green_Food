import React from "react";
import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
const ModalBackdrop = (props) => {
  return <div className={Styles.backdrop} onClick={props.closeModal}></div>;
};
const ModalOverlay = (props) => {
  return <div className={Styles.modal}>{props.children}</div>;
};

const protalElement = document.getElementById("overlay");

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop closeModal={props.closeModal} />,
        protalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        protalElement
      )}
    </React.Fragment>
  );
}

export default Modal;
