import React, { Component } from "react";
import { fetchImage, renderValues } from './api';
import {Searchbar} from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from "./Button/Button";
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppDiv} from './App.styled';

export class App extends Component {
  state = {
    galleryItems: [],
    searchQuery: '',
    galleryPage: 1,
    error: null,
    Loading: false,
    isButtonShow: false,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const nextPage = this.state.galleryPage;
    const prevPage = prevState.galleryPage;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.fetchGallery();
    }    
  }

  fetchGallery = async () => {
    const { searchQuery, galleryPage } = this.state;
    this.setState({ Loading: true });
    
    try {
      const { hits, totalHits } = await fetchImage(searchQuery, galleryPage); 
      if (totalHits === 0) {
        toast.warn(
          'Sorry, but we have not found anything. Please change your search query.'
        );
      }
    
      const newImages = renderValues(hits);
      this.setState(({  galleryItems }) => ({
        galleryItems: [...galleryItems, ...newImages],
        isButtonShow: this.state.galleryPage < Math.ceil(totalHits / 12 ),
        totalHits,     
      })
      );    
    } catch (error) {
      this.setState({ error });
      toast.error('Oops!!! Something went wrong');
    } finally {
      this.setState({ Loading: false });
    }
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, galleryItems: [], galleryPage: 1, });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      galleryPage: prevState.galleryPage + 1,
    }));
  };

  render() {

    const { galleryItems, loading, isButtonShow, error } = this.state;

    return (
      <AppDiv>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <h2>Please enter a word to search!</h2>}
        {!error && <ImageGallery galleryItems={galleryItems} />}
        {loading && <Loader />}
        {isButtonShow && <Button onClick={this.onLoadMore} />}
        <ToastContainer autoClose={1000} theme="light"/>
      </AppDiv>
    );
  }
}