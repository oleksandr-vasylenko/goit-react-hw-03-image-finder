import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppThumb } from './App.Styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button';
import { fetchImages } from 'components/services/api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // componentDidUpdate(_, prevState) {
  //   if (
  //     prevState.page !== this.state.page ||
  //     prevState.query !== this.state.query
  //   ) {
  //     fetchImages(this.state.query, this.state.page).then(image => {
  //       if (prevState.items.length > 0) {
  //         this.setState({
  //           items: [...prevState.items, ...image.hits],
  //         });
  //       } else {
  //         this.setState({ items: image.hits });
  //       }
  //     });
  //   }
  // }

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      fetchImages(this.state.query, this.state.page).then(image => {
        this.setState({
          items: [...prevState.items, ...image.hits],
        });
      });
    } else if (prevState.query !== this.state.query) {
      fetchImages(this.state.query, this.state.page).then(image => {
        this.setState({ items: image.hits });
      });
    }
  }

  handleFormSubmit = sumbittedQuery => {
    this.setState({ query: sumbittedQuery });
  };

  render() {
    return (
      <AppThumb>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.items} />
        {this.state.items.length > 11 && (
          <button onClick={this.loadMore}>LOAD MORE</button>
        )}
        <GlobalStyle />
      </AppThumb>
    );
  }
}
