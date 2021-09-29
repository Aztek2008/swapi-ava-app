import React from 'react';
import { useParams } from 'react-router';
import films from '../collections/films.json';
import species from '../collections/species.json';
import characters from '../collections/people.json';
import starships from '../collections/starships.json';
import planets from '../collections/planets.json';

export const CharacterDetailsCard = () => {
  const { id } = useParams();
  const characterImg = `https://starwars-visualguide.com/assets/img//characters/${id}.jpg`;
  const titleStyle = { color: '#b88888', fontWeight: 900, fontSize: '32px' };
  const currentCharacter = characters[id - 1];
  let characterFilms = [];
  let characterShips = [];
  let characterHomeworld = '';
  let characterKind = '';

  const mapStatefromUrls = (urlArr, collection, characteristic) => {
    urlArr.map((url) =>
      collection.filter((element) => {
        if (url === element.url) {
          if (typeof urlArr === 'string') {
            characteristic = element.name;
          }
          characteristic.push(element.title || element.name);
        }
      })
    );
  };

  mapStatefromUrls(currentCharacter.films, films, characterFilms);
  mapStatefromUrls(currentCharacter.starships, starships, characterShips);

  species.filter((element) => {
    if (currentCharacter.species[0] === element.url) {
      characterKind = element.name;
    }
  });

  planets.filter((planet) => {
    if (currentCharacter.homeworld === planet.url) {
      characterHomeworld = planet.name;
    }
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
                <span>{characterKind ? characterKind : 'Not specified'}</span>
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
