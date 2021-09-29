import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import * as types from '../types';
import { CharacterContext } from '../context';

export const CharacterDetailsCard = () => {
  const { id } = useParams();
  const { states, dispatchEvent } = useContext(CharacterContext);
  const url = id && `https://swapi.dev/api/people/${id}/`;
  const imgUrl =
    id && `https://starwars-visualguide.com/assets/img//characters/${id}.jpg`;

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        dispatchEvent(types.SET_CHARACTER, result.data);
        dispatchEvent(types.SET_FILM_URLS, result.data.films);
        dispatchEvent(types.SET_STARSHIPS_URLS, result.data.starships);
        dispatchEvent(types.SET_CHARACTER_SPECIES_URLS, result.data.species);
        dispatchEvent(types.SET_HOMEWORLD_URL, result.data.homeworld);
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }, [url]);

  useEffect(() => {
    states.filmUrls.map(async (url) => {
      await axios
        .get(url)
        .then((film) =>
          dispatchEvent(
            types.SET_CHARACTER_FILMS,
            (prev) =>
              !prev.includes(film.data.title) && [...prev, film.data.title]
          )
        )
        .catch((e) => {
          throw new Error(e.message);
        });
    });
  }, [states.filmUrls]);

  useEffect(() => {
    states.characterSpeciesUrls.map(async (url) => {
      await axios
        .get(url)
        .then((species) =>
          dispatchEvent(types.SET_CHARACTER_SPECIES, species.data.name)
        )
        .catch((e) => {
          throw new Error(e.message);
        });
    });
  }, [states.characterSpeciesUrls]);

  useEffect(() => {
    states.starshipUrls.map(async (url) => {
      await axios
        .get(url)
        .then((film) =>
          dispatchEvent(types.SET_CHARACTER_STARSHIPS, (prev) => [
            ...prev,
            film.data.name,
          ])
        )
        .catch((e) => {
          throw new Error(e.message);
        });
    });
  }, [states.starshipUrls]);

  useEffect(() => {
    states.homeworldUrl &&
      axios
        .get(states.homeworldUrl)
        .then((planet) => dispatchEvent(types.SET_HOMEWORLD, planet.data.name))
        .catch((e) => {
          throw new Error(e.message);
        });
  }, [states.homeworldUrl]);

  return (
    <div>
      <div className='row'>
        <div className='col s10 m12'>
          <div className='card'>
            <div className='card-image'>
              <img src={imgUrl} alt={states.character.name} />
              <span
                className='card-title'
                style={{ color: '#b88888', fontWeight: 900, fontSize: '32px' }}
              >
                <b>{states.character.name}</b>
              </span>
            </div>
            <article className='card-content'>
              <div className='spanStyle'>
                <span style={{ minWidth: '20%' }}>Films:</span>
                <span> {states.characterFilms.join(', ')} </span>
              </div>

              <div className='spanStyle'>
                <span style={{ width: '20%' }}>Species: </span>
                <span>
                  {states.characterSpecies.name
                    ? states.characterSpecies.name
                    : 'Not specified'}
                </span>
              </div>

              <div className='spanStyle'>
                <span style={{ minWidth: '20%' }}>Spaceships: </span>
                <span>
                  {states.starships.length > 0
                    ? states.starships.join(', ')
                    : 'Not specified'}
                </span>
              </div>
              <div className='spanStyle'>
                <span style={{ minWidth: '20%' }}>Homeworld: </span>
                <span> {states.homeworld}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
