import Modal from 'react-modal';
import { Component } from 'react';
// import { Modal } from 'components/Modal/Modal';
import { ImageStyle } from './ImageGalleryItem.Styled';

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

export class ImageItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { webformatURL, imagetags, largeImageURL } = this.props;

    return (
      <>
        <ImageStyle
          src={webformatURL}
          alt={imagetags}
          onClick={this.toggleModal}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.toggleModal}
          style={modalStyles}
        >
          <button onClick={this.toggleModal}>close</button>
          <img src={largeImageURL} alt={imagetags}></img>
        </Modal>
      </>
    );
  }
}
