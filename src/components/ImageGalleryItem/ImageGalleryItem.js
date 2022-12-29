import { Component } from 'react';
// import { Modal } from 'components/Modal/Modal';
import { ImageItemStyle, ImageStyle } from './ImageGalleryItem.Styled';

export class ImageItem extends Component {
  state = {
    isModalOpen: false,
  };

  handleClickOnImage = e => {
    console.dir(e.target);
    // this.props.onSubmit(this.state.query);
  };

  // openModal = () => this.setState({ isModalOpen: true });
  // closeModal = () => this.setState({ isModalOpen: false });

  render() {
    // console.dir(this.props.images[0].id);
    // const { webformatURL, tags, largeImageURL } = this.props.images;

    return this.props.images.map(image => (
      <ImageItemStyle key={image.id}>
        <ImageStyle
          src={image.webformatURL}
          alt={image.imagetags}
          onClick={() => {
            this.props.onSelect(image.largeImageURL);
          }}
        />
      </ImageItemStyle>
    ));
  }
}
