import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import { ImageItemStyle, ImageStyle } from './ImageGalleryItem.Styled';

export class ImageItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    // console.dir(this.props.images[0].id);
    // const { webformatURL, tags, largeImageURL } = this.props.images;

    return this.props.images.map(image => (
      <ImageItemStyle>
        <ImageStyle
          src={image.webformatURL}
          alt={image.imagetags}
          onClick={this.openModal}
        />
        {this.state.isModalOpen && (
          <Modal largeImageURL={image.largeImageURL} tags={image.tags} />
        )}
      </ImageItemStyle>
    ));
  }
}
