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

  return {
    getTrendingGifs,
  };
};

const networkServicee = network();
export default networkServicee;
