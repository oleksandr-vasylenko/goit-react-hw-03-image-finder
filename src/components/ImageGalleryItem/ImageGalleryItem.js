import Modal from 'react-modal';
import { Component } from 'react';
// import { Modal } from 'components/Modal/Modal';
import { ImageItemStyle, ImageStyle } from './ImageGalleryItem.Styled';

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

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    return this.props.images.map(image => (
      <ImageItemStyle key={image.id}>
        <ImageStyle
          src={image.webformatURL}
          alt={image.imagetags}
          onClick={this.openModal}
        />
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={() => this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal}>close</button>
          <img src={image.largeImageURL} alt={image.imagetags}></img>
        </Modal>
      </ImageItemStyle>
    ));
  }
}
