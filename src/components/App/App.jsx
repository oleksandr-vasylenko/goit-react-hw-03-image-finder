import { Component } from 'react';
import { GlobalStyle } from '../../GlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { AppThumb } from './App.Styled';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button';
import { fetchImages } from 'components/services/api';
import { RotatingLines } from 'react-loader-spinner';
// import { Modal } from 'components/Modal/Modal';

import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    selectedImage: null,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({ loading: true });
      fetchImages(this.state.query, this.state.page)
        .then(data => {
          this.setState({
            images: [...prevState.images, ...data.hits],
          });
        })
        .finally(() => this.setState({ loading: false }));
    } else if (prevState.query !== this.state.query) {
      this.setState({ loading: true });
      fetchImages(this.state.query, this.state.page)
        .then(data => {
          this.setState({ images: data.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = sumbittedQuery => {
    this.setState({ query: sumbittedQuery });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleOnImageClick = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  // openModal = () => this.setState({ isModalOpen: true });

  // closeModal = () => this.setState({ isModalOpen: false });

  render() {
    // console.log(this.state.images.length % 12 < 12);
    return (
      <AppThumb>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          images={this.state.images}
          onSelect={this.handleOnImageClick}
        />

        {this.state.images.length > 11 && (
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

        <Modal
          isOpen={this.state.selectedImage !== null}
          onRequestClose={() => this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal}>close</button>
          <img src={this.state.selectedImage} alt="selected item"></img>
        </Modal>

        {/* {this.state.isModalOpen && (
          <Modal largeImageURL={image.largeImageURL} tags={image.tags} />
        )} */}

        <GlobalStyle />
      </AppThumb>
    );
  }
}
