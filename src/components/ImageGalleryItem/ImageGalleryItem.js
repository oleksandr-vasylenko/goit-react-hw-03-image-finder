import { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageModal } from 'components/Modal/Modal';
import { ImageStyle } from './ImageGalleryItem.Styled';

export class ImageItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;

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

ImageItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
};
