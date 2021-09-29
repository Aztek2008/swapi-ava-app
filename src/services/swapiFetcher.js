import axios from 'axios';

export const swapiFetcher = async (query) => {
  return await axios.get(`http://swapi.dev/api/${query}`);
};
