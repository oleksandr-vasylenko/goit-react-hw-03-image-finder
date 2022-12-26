import { SearchbarHeader } from './Searchbar.Styled';

export const Searchbar = () => {
  return (
    <SearchbarHeader>
      <form class="form">
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </SearchbarHeader>
  );
};
