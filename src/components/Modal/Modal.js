import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
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
