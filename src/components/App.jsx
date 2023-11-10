import React, { Component } from "react";
import FetchGallery from './api';
import {Searchbar} from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

const fetchGallery = new FetchGallery();

export class App extends Component {
  state = {
    searchQuery: ``,
    galleryItems: [],
    galleryPage: 1,
    isloading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.galleryPage;
    const nextPage = this.state.galleryPage;

    if (prevQuery !== nextQuery) {
      this.setState({ galleryPage: 1, galleryItems: []});
      if (nextPage === 1) {
        this.fetchGalleryItems(nextQuery, nextPage);
      }
    }   
  }

  fetchGalleryItems = (nextQuery, nextPage) => {
    this.setState({ isloading: true, error: false });

  fetchGallery.query = nextQuery;
  fetchGallery.page = nextPage;

  fetchGallery.fetchGallery().then(data => {
    fetchGallery.hits = data.totalHits;

    const newData = data.hits.map(
      ({ id, tags, webformatURL, largeImageURL }) => ({
        id,
        tags,
        webformatURL,
        largeImageURL,
      })
    );

    const currentData = [...this.state.galleryItems, ...newData];

    this.setState(prevState => ({
      galleryItems: [...prevState.galleryItems, ...newData],
    }));

    this.setState({
      isloading: false,

    });
    });
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { galleryItems } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery galleryItems={galleryItems} />
      </div>
    );
  }
}