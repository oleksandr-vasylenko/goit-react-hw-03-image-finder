import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppThumb } from './App.Styled';
import { ButtonLoadMore } from 'components/Button/Button.Styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    items: [],
  };

  // loadMore = () => {
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  handleFormSubmit = foundImagesArr => {
    console.log(foundImagesArr);
    this.setState({ items: foundImagesArr });
  };

  render() {
    return (
      <AppThumb>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.items} />
        <ButtonLoadMore />
        <GlobalStyle />
      </AppThumb>
    );
  }
}
