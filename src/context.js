import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as types from './types';

export const CharacterContext = createContext();

export const CharacterContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [onOrOption, setOnOrOption] = useState('');
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
      case types.SET_AND_OR_OPTION:
        setOnOrOption(payload);
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
      {children}
    </CharacterContext.Provider>
  );
};

CharacterContextProvider.propTypes = {
  loading: PropTypes.bool,
  onOrOption: PropTypes.string,
  filmUrl: PropTypes.string,
  yearMin: PropTypes.string,
  yearMax: PropTypes.string,
  speciesUrl: PropTypes.string,
  filterByFilm: PropTypes.arrayOf(PropTypes.object),
  filterCharactersByInput: PropTypes.arrayOf(PropTypes.object),
  filterCharactersByFilmOptions: PropTypes.arrayOf(PropTypes.object),
  filterCharactersBySpeciesOptions: PropTypes.arrayOf(PropTypes.object),
  filterCharactersByYearOptions: PropTypes.arrayOf(PropTypes.object),
  dispatchEvent: PropTypes.func,
};
