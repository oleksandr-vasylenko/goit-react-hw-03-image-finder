import PropTypes from 'prop-types';
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
              tags={image.tags}
              largeImageURL={image.largeImageURL}
            />
          </ImageItemStyle>
        ))}
      </ImageLayout>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
};
