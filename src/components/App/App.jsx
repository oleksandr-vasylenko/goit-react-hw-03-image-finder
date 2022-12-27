import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppThumb } from './App.Styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';

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
    this.setState({ items: foundImagesArr });
  };

  render() {
    return (
      <AppThumb>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.items} />
        {this.state.items.length > 11 && <Button />}
        <GlobalStyle />
      </AppThumb>
    );
  }
}
