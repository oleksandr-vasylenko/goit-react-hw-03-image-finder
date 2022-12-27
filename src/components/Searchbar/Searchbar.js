import { fetchImages } from 'components/services/api';
import { Component } from 'react';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.Styled';

export class Searchbar extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      page: 1,
      query: e.target.elements.query.value,
      items: [],
    });
    this.props.onSubmit(this.state.items);
    e.target.reset();
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      fetchImages(this.state.query, this.state.page).then(images =>
        this.setState({ items: images.hits })
      );
    }
  }

  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="query"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
