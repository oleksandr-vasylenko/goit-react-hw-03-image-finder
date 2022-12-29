import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    border: 'none',
    borderRadius: '0',
    padding: '0',
    inset: '',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, isClosed, largeImageURL, tags }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={isClosed} style={modalStyles}>
      <img src={largeImageURL} alt={tags}></img>
    </Modal>
  );
};
