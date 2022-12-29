import { ImageItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageLayout } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <ImageLayout>
      <ImageItem images={images} />
    </ImageLayout>
  );
};

// export const ImageGallery = ({ images }) => {
//   return (
//     <div>
//       <ImageGalleryList>
//         {images.map(image => (
//           <ImageGalleryItemStyle key={image.id}>
//             <ImageGalleryItem
//               webformatURL={image.webformatURL}
//               tags={image.tags}
//             />
//           </ImageGalleryItemStyle>
//         ))}
//       </ImageGalleryList>
//     </div>
//   );
// };
