import axios from 'axios';
import { GIPHY_BASE_URL } from './environment';

const network = () => {
  const baseUrl = GIPHY_BASE_URL;
  const params = {
    api_key: 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw',
  };

  //   GET 25 trending Gifs
  const getTrendingGifs = () => {
    const config = { params };
    return axios.get(`${baseUrl}/gifs/trending`, config);
  };

  //   GET 50 gifs by search str
  const searchGifs = (str) => {
    const config = { params };
    return axios.get(`${baseUrl}/gifs/search?q=${str}&`, config);
  };

  // POST Gif to favorites
  const addGiff = (gif) => {
    return axios.post('faves', gif);
  };

  // DELETE Gif from favorites
  const deleteGif = (id) => {
    return axios.delete(`faves/${id}`);
  };

  // GET all faves
  const getFaves = () => {
    return axios.get('/faves');
  };

  return {
    getTrendingGifs,
    searchGifs,
    addGiff,
    deleteGif,
    getFaves,
  };
};

const networkServicee = network();
export default networkServicee;
