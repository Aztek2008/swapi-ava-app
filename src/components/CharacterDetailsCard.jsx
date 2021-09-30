import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import films from '../collections/films.json';
import species from '../collections/species.json';
import characters from '../collections/people.json';
import starships from '../collections/starships.json';
import planets from '../collections/planets.json';
import { makeStateFromUrls } from '../services/makeStateFromUrls';

export const CharacterDetailsCard = () => {
  const { id } = useParams();
  const characterImg = `https://starwars-visualguide.com/assets/img//characters/${id}.jpg`;
  const titleStyle = { color: '#b88888', fontWeight: 900, fontSize: '32px' };
  const currentCharacter = characters[id - 1];
  let characterFilms = [];
  let characterShips = [];
  let characterKind = '';
  let characterHomeworld = '';

  makeStateFromUrls(currentCharacter.films, films, characterFilms);
  makeStateFromUrls(currentCharacter.starships, starships, characterShips);

  species.filter((element) => {
    if (currentCharacter.species[0] === element.url) {
      characterKind = element.name;
    }
    return element.name;
  });

  planets.filter((planet) => {
    if (currentCharacter.homeworld === planet.url) {
      characterHomeworld = planet.name;
    }
    return planet.name;
  });

  return (
    <div>
      <div className='row'>
        <div className='col s10 m12'>
          <div className='card'>
            <div className='card-image'>
              <img src={characterImg} alt={currentCharacter.name} />
              <span className='card-title' style={titleStyle}>
                <b>{currentCharacter.name}</b>
              </span>
            </div>
            <article className='card-content'>
              <div className='spanStyle'>
                <span style={{ minWidth: '20%' }}>Films:</span>
                <span> {characterFilms.join(', ')} </span>
              </div>

              <div className='spanStyle'>
                <span style={{ width: '20%' }}>Species: </span>
                <span>{characterKind ? characterKind : 'Human'}</span>
              </div>

              <div className='spanStyle'>
                <span style={{ minWidth: '20%' }}>Spaceships: </span>
                <span>
                  {characterShips.length > 0
                    ? characterShips.join(', ')
                    : 'Not specified'}
                </span>
              </div>
              <div className='spanStyle'>
                <span style={{ minWidth: '20%' }}>Homeworld: </span>
                <span> {characterHomeworld}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterDetailsCard.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  species: PropTypes.arrayOf(PropTypes.object),
  characters: PropTypes.arrayOf(PropTypes.object),
  starships: PropTypes.arrayOf(PropTypes.object),
  planets: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  characterImg: PropTypes.string,
  characterFilms: PropTypes.array,
  characterShips: PropTypes.array,
  characterHomeworld: PropTypes.string,
  characterKind: PropTypes.string,
  urlArr: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  collection: PropTypes.arrayOf(PropTypes.object),
  characteristic: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
