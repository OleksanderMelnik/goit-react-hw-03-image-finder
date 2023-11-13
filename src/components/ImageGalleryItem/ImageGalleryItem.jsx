import { Component } from 'react';
import {Modal} from '../Modal/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const {
      galleryItem: { webformatURL, tags, largeImageURL },
    } = this.props;

    return (     
        <>
          <GalleryItem className="gallery-item" onClick={this.toggleModal}>
          <GalleryImg src={webformatURL} alt={tags} />
          </GalleryItem>
          {this.state.isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            onCloseModal={this.toggleModal}
          />
        )}
        </>
    );
  }
}