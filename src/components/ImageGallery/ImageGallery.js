import { ImageItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageLayout, ImageItemStyle } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ImageLayout>
        {images.map(image => (
          <ImageItemStyle key={image.id}>
            <ImageItem
              webformatURL={image.webformatURL}
              tags={image.imagetags}
              largeImageURL={image.largeImageURL}
            />
          </ImageItemStyle>
        ))}
      </ImageLayout>
    </div>
  );
};
