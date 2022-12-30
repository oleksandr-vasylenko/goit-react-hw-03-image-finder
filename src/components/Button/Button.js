import PropTypes from 'prop-types';
import { ButtonLoadMore, ButtonThumb } from './Button.Styled';

export const Button = ({ onLoadClick }) => {
  return (
    <ButtonThumb>
      <ButtonLoadMore onClick={onLoadClick}>LOAD MORE</ButtonLoadMore>
    </ButtonThumb>
  );
};

Button.propTypes = {
  onLoadClick: PropTypes.func,
};
