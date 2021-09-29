import { useState } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { BreadCrumbBar } from './components/BreadCrumbBar';
import { CharacterContext } from './context';
import { useRoutes } from './routes';
import * as types from './types';

import 'materialize-css';

export const App = () => {
  const routes = useRoutes();

  const [loading, setLoading] = useState(false);
  const [onOrOption, setOnOrOption] = useState(false);
  const [filmUrl, setfilmUrl] = useState('');
  const [filterByFilm, setfilterByFilm] = useState('');
  const [speciesUrl, setspeciesUrl] = useState('');
  const [yearMin, setyearMin] = useState('');
  const [yearMax, setyearMax] = useState('');
  const [filterCharactersByInput, setfilterCharactersByInput] = useState([]);
  const [filterCharactersByFilmOptions, setfilterCharactersByFilmOptions] =
    useState([]);
  const [
    filterCharactersBySpeciesOptions,
    setfilterCharactersBySpeciesOptions,
  ] = useState([]);
  const [filterCharactersByYearOptions, setfilterCharactersByYearOptions] =
    useState([]);

  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      case types.SET_FILM_URL:
        setfilmUrl(payload);
        return;
      case types.SET_FILTER_BY_FILM:
        setfilterByFilm(payload);
        return;
      case types.SET_FILTER_BY_SPECIES:
        setspeciesUrl(payload);
        return;
      case types.SET_MIN_YEAR_OPTION:
        setyearMin(payload);
        return;
      case types.SET_MAX_YEAR_OPTION:
        setyearMax(payload);
        return;
      case types.SET_CHARACTERS_BY_INPUT:
        setfilterCharactersByInput(payload);
        return;
      case types.SET_CHARACTERS_BY_FILM_OPTION:
        setfilterCharactersByFilmOptions(payload);
        return;
      case types.SET_CHARACTERS_BY_SPECIES_OPTION:
        setfilterCharactersBySpeciesOptions(payload);
        return;
      case types.SET_CHARACTERS_BY_YEAR_OPTION:
        setfilterCharactersByYearOptions(payload);
        return;

      default:
        return;
    }
  };

  const states = {
    loading,
    onOrOption,
    filmUrl,
    yearMin,
    yearMax,
    speciesUrl,
    filterByFilm,
    filterCharactersByInput,
    filterCharactersByFilmOptions,
    filterCharactersBySpeciesOptions,
    filterCharactersByYearOptions,
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

App.propTypes = {};

// optionalArray: PropTypes.array,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,
