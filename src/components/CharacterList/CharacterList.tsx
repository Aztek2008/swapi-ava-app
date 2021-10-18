import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CharacterListItem } from '../CharacterListItem';
import { filterIntermediaryAction } from '../OptionsForFilter/filterOptionsSlice';
import { IFilterByInputState, IOptionsState } from '../../typings/models';
import characters from '../../collections/people.json';

export const CharacterList = () => {
  const dispatch = useDispatch();

  const filteredByInput = useSelector(
    (state: IFilterByInputState) => state.filteredByInput.value
  );

  const { filmUrl, speciesUrl, minYear, maxYear, interFilter } = useSelector(
    (state: { filteredByOptions: IOptionsState }) => state.filteredByOptions
  );

  const filmUrlExists = filmUrl?.length > 0;
  const speciesUrlExists = speciesUrl?.length > 0;

  useEffect(() => {
    dispatch(filterIntermediaryAction(characters));

    if (filmUrlExists) {
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

    if (filteredByYearMax?.length > 0) {
      dispatch(filterIntermediaryAction(filteredByYearMax));
    }

    // eslint-disable-next-line
  }, [filmUrl, speciesUrl, filmUrlExists, speciesUrlExists, minYear, maxYear]);

  return (
    <div className='collection'>
      {interFilter
        .filter((item) =>
          item.name.toLowerCase().includes(filteredByInput.trim().toLowerCase())
        )
        .map((character, idx) => (
          <CharacterListItem key={idx} character={character} id={idx + 1} />
        ))}
    </div>
  );
};
