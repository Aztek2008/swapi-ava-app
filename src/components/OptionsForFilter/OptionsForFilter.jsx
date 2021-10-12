import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { years } from '../../collections/years';
import films from '../../collections/films.json';
import species from '../../collections/species.json';
import {
  setFilmUrlAction,
  setSpecieUrlAction,
  setMinYearAction,
  setMaxYearAction,
} from './filterOptionsSlice';

export const OptionsForFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const targetValue = event.target.value;
    const targetName = event.target.name;

    if (targetName === 'movie-select') {
      !targetValue && dispatch(setFilmUrlAction(''));

      films.filter((element) => {
        if (targetValue === element.title) {
          dispatch(setFilmUrlAction(element.url));
        }
        return element.url;
      });
    }

    if (targetName === 'species-select') {
      !targetValue && dispatch(setSpecieUrlAction(''));

      species.filter((element) => {
        if (targetValue === element.name) {
          dispatch(setSpecieUrlAction(element.url));
        }
        return element.url;
      });
    }

    if (targetName === 'year-select-min') {
      dispatch(setMinYearAction(targetValue));
    }

    if (targetName === 'year-select-max') {
      dispatch(setMaxYearAction(targetValue));
    }
  };

  return (
    <section
      style={{ display: 'flex', marginBottom: '50px' }}
      onChange={handleFilterChange}
    >
      <div className='input-field col s12' id='selectDiv'>
        <select name='movie-select' id='select-movie'>
          <option value='' defaultValue>
            Choose...
          </option>
          {films.map((film) => (
            <option
              key={film.episode_id}
              tabIndex={film.episode_id}
              value={film.title}
            >
              {film.title}
            </option>
          ))}
        </select>
        <label>Film</label>
      </div>
      <div className='input-field col s12'>
        <select name='species-select' id='select-species'>
          <option value='' defaultValue>
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
          <option value='' defaultValue>
            Choose min...
          </option>
          {years.map((year, idx) => (
            <option key={idx} value={year}>
              {year}
            </option>
          ))}
        </select>
        <label>Birth year range</label>
        <select name='year-select-max' id='select-year-max'>
          <option value='' defaultValue>
            Choose max...
          </option>
          {years.map((year, idx) => (
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
  years: PropTypes.arrayOf(PropTypes.string),
  films: PropTypes.arrayOf(PropTypes.object),
  species: PropTypes.arrayOf(PropTypes.object),
};
