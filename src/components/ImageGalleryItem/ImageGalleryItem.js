import { ImageGalleryItemImageImg } from './ImageGalleryItem.Styled';
// import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  return (
    <>
      <ImageGalleryItemImageImg src={webformatURL} alt={tags} />
      {/* <Modal largeImageURL={largeImageURL} tags={tags} /> */}
    </>
  );
};
