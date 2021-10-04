import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CharacterListItem } from '../CharacterListItem';
import characters from '../../collections/people.json';
import { filterIntermediaryAction } from '../OptionsForFilter/OptionsForFilterSlice';

export const CharacterList = () => {
  // const [interFilter, setInterFilter] = useState([]);
  const dispatch = useDispatch();
  const filteredByInput = useSelector((state) => state.filteredByInput);
  const { filmUrl, speciesUrl, minYear, maxYear, filteredByYear, interFilter } =
    useSelector((state) => state.filteredByOptions);

  const filmUrlExists = filmUrl?.length > 0;
  const speciesUrlExists = speciesUrl?.length > 0;

  useEffect(() => {
    dispatch(filterIntermediaryAction(characters));

    if (filmUrlExists > 0) {
      const filmList = interFilter.filter((item) =>
        item.films.includes(filmUrl)
      );
      dispatch(filterIntermediaryAction(filmList));
    }

    if (speciesUrlExists) {
      const speciesList = interFilter.filter((item) => {
        if (speciesUrl === 'https://swapi.dev/api/species/1/') {
          return item.species.length === 0;
        }
        return Object.values(item.species).includes(speciesUrl);
      });
      dispatch(filterIntermediaryAction(speciesList));
    }

    const filteredByYearMin = interFilter.filter(
      (item) => parseFloat(item.birth_year) >= parseFloat(minYear)
    );

    const filteredByYearMax = filteredByYearMin.filter(
      (item) => parseFloat(item.birth_year) <= parseFloat(maxYear)
    );

    if (filteredByYearMax.length > 0) {
      dispatch(filterIntermediaryAction(filteredByYearMax));
    }
    // eslint-disable-next-line
  }, [
    filmUrl,
    speciesUrl,
    filmUrlExists,
    speciesUrlExists,
    minYear,
    maxYear,
    filteredByYear,
  ]);

  const currentCharacters =
    filteredByInput.length > 0
      ? filteredByInput
      : // : filteredByFilm.length > 0
        // ? filteredByFilm
        // filteredBySpecies.length > 0
        // ? filteredBySpecies :
        // filteredByYear.length > 0
        // ? filteredByYear
        characters;

  return (
    <div className='collection'>
      {interFilter.map((character, idx) => (
        <CharacterListItem key={idx} character={character} id={idx + 1} />
      ))}
    </div>
  );
};

CharacterList.propTypes = {
  filteredByInput: PropTypes.arrayOf(PropTypes.object),
  filteredByFilm: PropTypes.arrayOf(PropTypes.object),
  filteredBySpecies: PropTypes.arrayOf(PropTypes.object),
  filteredByYear: PropTypes.arrayOf(PropTypes.object),
  characters: PropTypes.arrayOf(PropTypes.object),
  CharacterListItem: PropTypes.element,
};
