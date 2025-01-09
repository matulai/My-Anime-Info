import './Modal.css';

interface ModalProps {
  message: string;
  setModalMessage: (message: string) => void;
}

const Modal = ({ message, setModalMessage }: ModalProps) => {
  const closeModal = () => {
    setModalMessage('');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Modal;
