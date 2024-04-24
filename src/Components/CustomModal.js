import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModal = ({ showModal, setShowModal, setCaptchaCompleted, message, title }) => {
  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false); // Reset the showModal state when the modal is closed
        setCaptchaCompleted(false); // Reset the captchaCompleted state as well
      }}
      keyboard={false}
      backdrop="static"
      centered
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer>
        <button className="nav__cta" onClick={() => setShowModal(false)}> {/* Change button color */}
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomModal;
