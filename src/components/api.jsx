import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39676340-6e766954fc3fa698c8d5ed3b9';

export default class FetchGallery {
    constructor() {
      this.searchQuery = '';
      this.page = 1;
      this.totalHits = 0;
    }
    
    async fetchGallery() {
      const options = {
        method: 'get',
        url: `${BASE_URL}`,
        params: {
          key: `${API_KEY}`,
          q: `${this.searchQuery}`,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          page: `${this.page}`,
          per_page: `${this.PER_PAGE}`,
          },
      };
  
      try {  
        const response = await axios(options);
        const data = response.data;
        this.incrementPage();
        return data;
      } catch (error) {
        console.error(error);
        
      }    
  }
  
    get query() {
      return this.searchQuery;
    }
  
    set query(newQuery) {
      this.searchQuery = newQuery;
    }
  
    get hits() {
      return this.totalHits;
    }
  
    set hits(newTotalHits) {
      this.totalHits = newTotalHits;
    }
  
    incrementPage() {
      this.page += 1;
    }
  
  }