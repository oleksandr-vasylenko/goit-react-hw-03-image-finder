import Modal from 'react-modal';

// const modalStyles = {
//   overlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.80)',

//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: '1200',
//   },
//   content: {
//     position: 'absolute',
//     top: '40px',
//     left: '40px',
//     right: '40px',
//     bottom: '40px',
//     border: '1px solid #ccc',
//     background: '#fff',
//     overflow: 'auto',
//     WebkitOverflowScrolling: 'touch',
//     borderRadius: '4px',
//     outline: 'none',
//     padding: '20px',
//     backgroundColor: 'black',
//   },
// };

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
