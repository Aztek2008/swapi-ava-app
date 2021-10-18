import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './characterDetailsCardSlice';
import * as libs from '../../collections';
import {
  makeNamesFromUrls,
  findNameByUrl,
} from '../../services/makeNamesFromUrls';
import css from './CharacterDetailsCard.module.css';
import { IPageParams, IDetsState } from 'src/typings/models';

export const CharacterDetailsCard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: IDetsState) => state.characterDetails);

  const { id } = useParams<IPageParams>();
  const characterImg = `https://starwars-visualguide.com/assets/img//characters/${id}.jpg`; //TODO:SET TO STORE WITH AXIOS FROM SERVICES

  const currentCharacter = libs.characters[Number(id) - 1];
  let charcterFilmsUrls = currentCharacter.films;
  let characterShipsUrls = currentCharacter.starships;
  let characterSpeciesUrl = currentCharacter.species[0];
  let characterWorldUrl = currentCharacter.homeworld;
  const { films, starships, species, planets } = libs;

  useEffect(() => {
    const filmTitles = makeNamesFromUrls(charcterFilmsUrls, films);
    const shipsNames = makeNamesFromUrls(characterShipsUrls, starships);
    const speciesName = findNameByUrl(characterSpeciesUrl, species);
    const homeworldName = findNameByUrl(characterWorldUrl, planets);
    dispatch(actions.setFilmTitles(filmTitles));
    dispatch(actions.setShipsNames(shipsNames));
    dispatch(actions.setCharacterSpecies(speciesName));
    dispatch(actions.setCharacterHome(homeworldName));

    // eslint-disable-next-line
  }, [
    charcterFilmsUrls,
    characterShipsUrls,
    characterSpeciesUrl,
    characterWorldUrl,
  ]);

  //TODO:FIX TITLE STYLES!
  return (
    <div>
      <div className='row'>
        <div className='col s10 m12'>
          <div className={css.cardTitle}>
            <div className=''>
              <img
                src={characterImg}
                height='260'
                alt={currentCharacter.name}
              />
              <span className={`card-title ${css.titleStyle}`}>
                <b>{currentCharacter.name}</b>
              </span>
            </div>
            <article className='card-content'>
              <div className={css.spanStyle}>
                <span style={{ minWidth: '20%' }}>Films:</span>
                <span> {state.characterFilmsTitles.join(', ')} </span>
              </div>

              <div className={css.spanStyle}>
                <span style={{ width: '20%' }}>Species: </span>
                <span>{state.characterSpecies}</span>
              </div>

              <div className={css.spanStyle}>
                <span style={{ minWidth: '20%' }}>Spaceships: </span>
                <span>
                  {state.characterShipsNames.length > 0
                    ? state.characterShipsNames.join(', ')
                    : 'Not specified'}
                </span>
              </div>
              <div className={css.spanStyle}>
                <span style={{ minWidth: '20%' }}>Homeworld: </span>
                <span>{state.characterHomeworld}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
