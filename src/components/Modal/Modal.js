import { OverlayThumb } from './Modal.Styled';

export const Modal = ({ largeImageURL, tags }) => {
  return (
    <OverlayThumb>
      <div className="modal">
        <img src={largeImageURL} alt={tags} />
      </div>
    </OverlayThumb>
  );
};
