import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    
  };

  render() {
    const {
      galleryItem: { webformatURL, tags },
    } = this.props;

    return (     
        <li>
          <img src={webformatURL} alt={tags} />
        </li>
    );
  }
}