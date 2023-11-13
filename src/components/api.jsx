import axios from "axios";

const API_KEY = '39676340-6e766954fc3fa698c8d5ed3b9';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const  fetchImage = async (searchQuery, galleryPage) => {
  const response = await axios.get(`?q=${searchQuery}&page=${galleryPage}`);
  return response.data;
};

export function renderValues(data) {
  return data.map(({ id, tags, largeImageURL, webformatURL }) => ({
    id,
    tags,
    largeImageURL,
    webformatURL,
  }));
}
