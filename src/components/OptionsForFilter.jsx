import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CharacterContext } from '../context';
import * as types from '../types';
import { years } from '../collections/years';
import films from '../collections/films.json';
import species from '../collections/species.json';
import characters from '../collections/people.json';

export const OptionsForFilter = () => {
  const { states, dispatchEvent } = useContext(CharacterContext);
  let optionsFilmUrl = '';
  let optionsSpeciesUrl = '';

  useEffect(() => {
    const filteredByFilmCharacters = characters.filter((character) =>
      Object.values(character.films).includes(states.filmUrl)
    );

    const filteredBySpeciesCharacters = characters.filter((character) =>
      Object.values(character.species).includes(states.speciesUrl)
    );

    const filteredByYearCharactersMin = characters.filter(
      (character) => character.birth_year >= states.yearMin
    );

    const filteredByYearCharactersMax = filteredByYearCharactersMin.filter(
      (character) => character.birth_year <= states.yearMax
    );

    if (filteredByFilmCharacters.length > 0) {
      dispatchEvent(
        types.SET_CHARACTERS_BY_FILM_OPTION,
        filteredByFilmCharacters
      );
    }

    if (filteredBySpeciesCharacters.length > 0) {
      dispatchEvent(
        types.SET_CHARACTERS_BY_SPECIES_OPTION,
        filteredBySpeciesCharacters
      );
    }

    if (filteredByYearCharactersMax.length > 0) {
      dispatchEvent(
        types.SET_CHARACTERS_BY_YEAR_OPTION,
        filteredByYearCharactersMax
      );
    }

    // CLEAR STATE ARRAY OF CHARACTERS WHEN INPUT EMPTY
    if (states.filmUrl === '') {
      dispatchEvent(types.SET_CHARACTERS_BY_FILM_OPTION, []);
    }

    if (states.speciesUrl === '') {
      dispatchEvent(types.SET_CHARACTERS_BY_SPECIES_OPTION, []);
    }

    if (states.yearMin === '' && states.yearMax === '') {
      dispatchEvent(types.SET_CHARACTERS_BY_YEAR_OPTION, []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states.filmUrl, states.speciesUrl, states.yearMin, states.yearMax]);

  const makeFilmUrlFromTitle = (filterValue) => {
    films.filter((element) => {
      if (filterValue === element.title) {
        optionsFilmUrl = element.url;
      }
      return element.url;
    });
  };

  const makeSpeciesUrlFromTitle = (filterValue) => {
    species.filter((element) => {
      if (filterValue === element.name) {
        optionsSpeciesUrl = element.url;
      }
      return element.url;
    });
  };

  // HANDLING VALUES CHOOSEN FROM OPTIONS DROPDOWN
  const handleFilterChange = (event) => {
    const value = event.target.value;

    if (event.target.name === 'movie-select') {
      makeFilmUrlFromTitle(value);
      dispatchEvent(types.SET_FILM_URL, optionsFilmUrl);
    }
    if (event.target.name === 'species-select') {
      makeSpeciesUrlFromTitle(value);
      dispatchEvent(types.SET_FILTER_BY_SPECIES, optionsSpeciesUrl);
    }
    if (event.target.name === 'year-select-min') {
      dispatchEvent(types.SET_MIN_YEAR_OPTION, value);
    }
    if (event.target.name === 'year-select-max') {
      dispatchEvent(types.SET_MAX_YEAR_OPTION, value);
    }
  };

  return (
    <section
      style={{ display: 'flex', marginBottom: '50px' }}
      onChange={handleFilterChange}
    >
      <div className='input-field col s12' id='selectDiv'>
        <select name='movie-select' id='select-movie'>
          <option
            value={states.filterByFilm}
            defaultValue={states.filterByFilm}
          >
            Choose...
          </option>
          {films.map((film) => (
            <option key={film.episode_id} value={film.title}>
              {film.title}
            </option>
          ))}
        </select>
        <label>Film</label>
      </div>
      <div className='input-field col s12'>
        <select name='species-select' id='select-species'>
          <option value='' defaultValue={states.filterBySpecies}>
            Choose...
          </option>
          {species.map((specie) => (
            <option key={specie.url} value={specie.name} name='species'>
              {specie.name}
            </option>
          ))}
        </select>
        <label>Species</label>
      </div>
      <div className='input-field col s10'>
        <select name='year-select-min' id='select-year-min'>
          <option value='' defaultValue={states.yearMin}>
            Choose min...
          </option>
          {years.sort().map((year, idx) => (
            <option key={idx} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label>Birth year range</label>
        <select name='year-select-max' id='select-year-max'>
          <option value='' defaultValue={states.yearMax}>
            Choose max...
          </option>
          {years.sort().map((year, idx) => (
            <option key={idx} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label></label>
      </div>
    </section>
  );
};

OptionsForFilter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  years: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.object),
  species: PropTypes.arrayOf(PropTypes.object),
  characters: PropTypes.arrayOf(PropTypes.object),
  states: PropTypes.shape({
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
  }),
  dispatchEvent: PropTypes.func,
  filterValue: PropTypes.string,
};
