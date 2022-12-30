import { RotatingLines } from 'react-loader-spinner';
import { LoaderThumb } from './Loader.Styled';

export const Loader = () => {
  return (
    <LoaderThumb>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderThumb>
  );
};
