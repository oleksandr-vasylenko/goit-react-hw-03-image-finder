import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppThumb } from './App.Styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button';
import { fetchImages } from 'components/services/api';
import { RotatingLines } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    loading: false,
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetchImages(this.state.query, this.state.page)
        .then(image => {
          this.setState({
            items: [...prevState.items, ...image.hits],
          });
        })
        .finally(() => this.setState({ loading: false }));
    } else if (prevState.query !== this.state.query) {
      this.setState({ loading: true });
      fetchImages(this.state.query, this.state.page)
        .then(image => {
          this.setState({ items: image.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = sumbittedQuery => {
    this.setState({ query: sumbittedQuery });
  };

  render() {
    // console.log(this.state.items.length % 12 < 12);
    return (
      <AppThumb>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery items={this.state.items} />

        {this.state.items.length > 11 && (
          <button onClick={this.loadMore}>LOAD MORE</button>
        )}
        {this.state.loading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}
        <GlobalStyle />
      </AppThumb>
    );
  }
}
