import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList, ImageGalleryItemStyle } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ImageGalleryList>
        {images.map(image => (
          <ImageGalleryItemStyle key={image.id}>
            <ImageGalleryItem
              webformatURL={image.webformatURL}
              tags={image.tags}
            />
          </ImageGalleryItemStyle>
        ))}
      </ImageGalleryList>
    </div>
  );
};
