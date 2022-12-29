import { Component } from 'react';
import { ImageModal } from 'components/Modal/Modal';
import { ImageStyle } from './ImageGalleryItem.Styled';

export class ImageItem extends Component {
  state = {
    isModalOpen: false,
  };

  // toggleModal = () => {
  //   this.setState(prevState => ({
  //     isModalOpen: !prevState.isModalOpen,
  //   }));
  // };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <>
        <ImageStyle src={webformatURL} alt={tags} onClick={this.openModal} />

        {this.state.isModalOpen && (
          <ImageModal
            largeImageURL={largeImageURL}
            tags={tags}
            isOpen={this.openModal}
            isClosed={this.closeModal}
          />
        )}
      </>
    );
  }
}
