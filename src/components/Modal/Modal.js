import { OverlayThumb, ModalThumb } from './Modal.Styled';

export const Modal = ({ largeImageURL, tags }) => {
  return (
    <OverlayThumb>
      <ModalThumb>
        <img src={largeImageURL} alt={tags} />
      </ModalThumb>
    </OverlayThumb>
  );
};
