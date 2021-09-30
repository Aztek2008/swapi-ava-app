import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CharacterContext } from '../context';
import { CharacterListItem } from './CharacterListItem';
import characters from '../collections/people.json';

export const CharacterList = () => {
  const { states } = useContext(CharacterContext);

  const filteredCharacters =
    states.filterCharactersByFilmOptions.length > 0
      ? states.filterCharactersByFilmOptions
      : states.filterCharactersBySpeciesOptions.length > 0
      ? states.filterCharactersBySpeciesOptions
      : states.filterCharactersByYearOptions.length > 0
      ? states.filterCharactersByYearOptions
      : characters;

  const currentCharacters = states.filterCharactersByInput.length
    ? states.filterCharactersByInput
    : filteredCharacters;

  return (
    <div className='collection'>
      {currentCharacters?.map((character, idx) => (
        <CharacterListItem key={idx} character={character} id={idx + 1} />
      ))}
    </div>
  );
};

CharacterList.propTypes = {
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
  character: PropTypes.object,
  CharacterContext: PropTypes.element,
  CharacterListItem: PropTypes.element,
};
