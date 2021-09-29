import React, { useContext, useEffect } from 'react';
import * as types from '../types';
import { CharacterContext } from '../context';
import { swapiFetcher } from '../services/swapiFetcher';
import { CharacterListItem } from './CharacterListItem';

export const CharacterList = () => {
  const { states, dispatchEvent } = useContext(CharacterContext);

  useEffect(() => {
    swapiFetcher('people')
      .then((response) => {
        dispatchEvent(types.SET_CHARACTERS, response.data.results);
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }, []);

  const filteredCharacters = states.characters.filter(
    (character) =>
      Object.values(character).includes(states.filterByFilm) &&
      Object.values(character).includes(states.filterBySpecies) &&
      Object.values(character).includes(states.filterByYear)
  );

  const currentCharacters = states.filterCharactersByInput.length
    ? states.filterCharactersByInput
    : states.characters;

  return (
    <div className='collection'>
      {currentCharacters?.map((character, idx) => (
        <CharacterListItem key={idx} character={character} id={idx + 1} />
      ))}
    </div>
  );
};
