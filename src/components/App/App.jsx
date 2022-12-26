import { GlobalStyle } from '../../GlobalStyle';
import { AppThumb } from './App.Styled';
import { Searchbar } from 'components/Searchbar/Searchbar';

// const API_KEY = '30715503-b05874fb24d95ac5a3c3e4a16';
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const App = () => {
  return (
    <AppThumb>
      <Searchbar />
      <p>hello</p>
      <GlobalStyle />
    </AppThumb>
  );
};
