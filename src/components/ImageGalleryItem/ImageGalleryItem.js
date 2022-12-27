import { ImageGalleryItemImageImg } from './ImageGalleryItem.Styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <>
      <ImageGalleryItemImageImg src={webformatURL} alt={tags} />
    </>
  );
};
