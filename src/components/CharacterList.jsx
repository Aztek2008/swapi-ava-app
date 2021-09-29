import React, { useContext } from 'react';
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
