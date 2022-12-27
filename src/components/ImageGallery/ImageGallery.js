import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList, ImageGalleryItemStyle } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <div>
      <ImageGalleryList>
        {items.map(item => (
          <ImageGalleryItemStyle key={item.id}>
            <ImageGalleryItem
              webformatURL={item.webformatURL}
              tags={item.tags}
            />
          </ImageGalleryItemStyle>
        ))}
      </ImageGalleryList>
    </div>
  );
};
