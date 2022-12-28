// import { Component } from 'react';
// import { Modal } from 'components/Modal/Modal';

import { ImageItemStyle, ImageStyle } from './ImageGalleryItem.Styled';

export const ImageItem = ({ images }) => {
  return images.map(image => (
    <ImageItemStyle>
      <ImageStyle src={image.webformatURL} alt={image.tags}></ImageStyle>
    </ImageItemStyle>
  ));
};

// export class ImageGalleryItem extends Component {
//   state = {
//     isModalOpen: false,
//   };

//   openModal = () => this.setState({ isModalOpen: true });
//   closeModal = () => this.setState({ isModalOpen: false });

//   render() {
//     const { webformatURL, tags, largeImageURL } = this.props;

//     return (
//       <>
//         <ImageGalleryItemImageImg
//           src={webformatURL}
//           alt={tags}
//           onClick={this.openModal}
//         />
//         {this.state.isModalOpen && (
//           <Modal largeImageURL={largeImageURL} tags={tags} />
//         )}
//       </>
//     );
//   }
// }
