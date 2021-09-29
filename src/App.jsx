import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreadCrumbBar } from './components/BreadCrumbBar';
import { species, films, years } from './enumCollections';
import { CharacterContext } from './context';
import { useRoutes } from './routes';
import * as types from './types';

import 'materialize-css';

export const App = () => {
  // useEffect(() => {
  //   const persistedFilms = localStorage.getItem('films') || [];
  //   setCharacterFilms(JSON.parse(persistedFilms));
  // }, []);

  const routes = useRoutes();
  // const [films, setFilms] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [characterFilms, setCharacterFilms] = useState([]);
  const [characterSpecies, setCharacterSpecies] = useState([]);
  const [starships, setCharacterStarships] = useState([]);
  const [homeworld, setHomeworld] = useState('');
  const [filmUrls, setFilmUrls] = useState([]);
  const [starshipUrls, setStarshipsUrls] = useState([]);
  const [homeworldUrl, setHomeworldUrl] = useState('');
  const [characterSpeciesUrls, setCharacterSpeciesUrls] = useState([]);
  const [filterByFilm, setfilterByFilm] = useState('');
  const [filterBySpecies, setfilterBySpecies] = useState('');
  const [filterByYear, setfilterByYear] = useState('');
  const [filterCharactersByInput, setfilterCharactersByInput] = useState([]);

  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      case types.SET_CHARACTER:
        setCharacter(payload);
        return;
      case types.SET_CHARACTERS:
        setCharacters(payload);
        return;
      case types.SET_CHARACTER_FILMS:
        setCharacterFilms(payload);
        return;
      case types.SET_CHARACTER_SPECIES:
        setCharacterSpecies(payload);
        return;
      case types.SET_CHARACTER_STARSHIPS:
        setCharacterStarships(payload);
        return;
      case types.SET_HOMEWORLD:
        setHomeworld(payload);
        return;
      case types.SET_CHARACTER_SPECIES_URLS:
        setCharacterSpeciesUrls(payload);
        return;
      case types.SET_FILM_URLS:
        setFilmUrls(payload);
        return;
      case types.SET_STARSHIPS_URLS:
        setStarshipsUrls(payload);
        return;
      case types.SET_HOMEWORLD_URL:
        setHomeworldUrl(payload);
        return;
      case types.SET_FILTER_BY_FILM:
        setfilterByFilm(payload);
        console.log(`filterByFilm: `, filterByFilm);
        console.log(`filterByFilm payload: `, payload);

        return;
      case types.SET_FILTER_BY_SPECIES:
        setfilterBySpecies(payload);
        return;
      case types.SET_FILTER_BY_YEAR:
        setfilterByYear(payload);
        return;
      case types.SET_CHARACTERS_BY_INPUT:
        setfilterCharactersByInput(payload);
        return;
      default:
        return;
    }
  };

  const states = {
    characters,
    character,
    characterFilms,
    characterSpecies,
    characterSpeciesUrls,
    species,
    films,
    years,
    starships,
    homeworld,
    filmUrls,
    starshipUrls,
    homeworldUrl,
    filterByFilm,
    filterBySpecies,
    filterByYear,
    filterCharactersByInput,
  };

  return (
    <CharacterContext.Provider value={{ states, dispatchEvent }}>
      <Router>
        <div className='container'>
          <BreadCrumbBar />
          {routes}
        </div>
      </Router>
    </CharacterContext.Provider>
  );
};
