import { Component } from 'react';
// import PropTypes from 'prop-types';
import { GrSearch } from 'react-icons/gr';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.Styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  inputType = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() !== '') {
      this.props.onSubmit(this.state.query);
    }
    this.setState({ query: '' });
    e.target.reset();
  };

  render() {
    // console.log(this.props);
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <GrSearch />
            <SearchFormLabel></SearchFormLabel>
          </SearchFormButton>

          <SearchFormInput
            onChange={this.inputType}
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

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };
