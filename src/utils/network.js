import axios from 'axios';
import { GIPHY_BASE_URL } from './environment';

const network = () => {
  const baseUrl = GIPHY_BASE_URL;
  const params = {
    api_key: 'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw',
  };

  //   Get 25 trending Gifs
  const getTrendingGifs = () => {
    const config = { params };
    return axios.get(`${baseUrl}/gifs/trending`, config);
  };

  //   Get 25 trending Gifs
  const searchGifs = (str) => {
    const config = { params };
    return axios.get(`${baseUrl}/gifs/search?q=${str}&`, config);
  };

  return {
    getTrendingGifs,
    searchGifs,
  };
};

const networkServicee = network();
export default networkServicee;
