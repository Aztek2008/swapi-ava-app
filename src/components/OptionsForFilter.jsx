import React, { useContext } from 'react';
import { CharacterContext } from '../context';
import {
  SET_FILTER_BY_FILM,
  SET_FILTER_BY_SPECIES,
  SET_FILTER_BY_YEAR,
} from '../types';

export const OptionsForFilter = () => {
  const { states, dispatchEvent } = useContext(CharacterContext);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    if (event.target.name === 'movie-select') {
      dispatchEvent(SET_FILTER_BY_FILM, value);
    }
    if (event.target.name === 'species-select') {
      dispatchEvent(SET_FILTER_BY_SPECIES, value);
    }
    if (event.target.name === 'year-select-min') {
      dispatchEvent(SET_FILTER_BY_YEAR, value);
    }
    if (event.target.name === 'year-select-max') {
      dispatchEvent(SET_FILTER_BY_YEAR, value);
    }
  };

  return (
    <section
      style={{ display: 'flex', marginBottom: '50px' }}
      onChange={handleFilterChange}
    >
      <div className='input-field col s12' id='selectDiv'>
        <select name='movie-select' id='select-movie'>
          <option value='' disabled defaultValue>
            Choose...
          </option>
          {states.films.map((film) => (
            <option key={film.episode_id} value={film.title}>
              {film.title}
            </option>
          ))}
        </select>
        <label>Movie</label>
      </div>
      <div className='input-field col s12'>
        <select name='species-select' id='select-species'>
          <option value='' disabled defaultValue>
            Choose...
          </option>
          {states.species.map((specie) => (
            <option key={specie.url} value={specie.name} name='species'>
              {specie.name}
            </option>
          ))}
        </select>
        <label>Species</label>
      </div>
      <div className='input-field col s10'>
        <select name='year-select-min' id='select-year'>
          <option value='' disabled defaultValue>
            Choose min...
          </option>
          {states.years.map((year, idx) => (
            <option key={idx} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label>Birth year range</label>
        <select name='year-select-max' id='select-year'>
          <option value='' disabled defaultValue>
            Choose max...
          </option>
          {states.years.map((year, idx) => (
            <option key={idx} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label>Birth year range</label>
      </div>
    </section>
  );
};
