import { Component } from 'react';
import { ImageGalleryItemImageImg } from './ImageGalleryItem.Styled';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <>
        <ImageGalleryItemImageImg
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
        />
        {this.state.isModalOpen && (
          <Modal largeImageURL={largeImageURL} tags={tags} />
        )}
      </>
    );
  }
}
