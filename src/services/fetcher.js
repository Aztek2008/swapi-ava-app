import axios from 'axios';

export const swapiFetcher = async (query) => {
  return await axios.get(`http://swapi.dev/api/${query}`);
};

// export const imageFether = async (id) => {
//   return await axios.get(
//     `https://starwars-visualguide.com/assets/img//characters/${id}.jpg`
//   );
// };
