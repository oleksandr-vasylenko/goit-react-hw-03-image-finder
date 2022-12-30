import PropTypes from 'prop-types';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
  },
  content: {
    width: '80%',
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

ImageModal.propTypes = {
  isOpen: PropTypes.bool,
  isClosed: PropTypes.func,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
