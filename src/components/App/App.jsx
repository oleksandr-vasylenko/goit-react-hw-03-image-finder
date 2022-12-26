import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppThumb } from './App.Styled';
import { ButtonLoadMore } from 'components/Button/Button.Styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    images: [],
  };

  // loadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  handleFormSubmit = image => {
    console.log('hello handleFormSubmiееееt');
    this.setState(this.state.images.push(image));
  };

  render() {
    return (
      <AppThumb>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.images} />
        <ButtonLoadMore />
        <GlobalStyle />
      </AppThumb>
    );
  }
}
