import React from 'react';
import { CharacterList } from '../components/CharacterList/CharacterList';
// import { FavoritesSideBar } from '../components/FavoritesSideBar';
import { Filter } from '../components/Filter/Filter';

export const MainPage = () => {
  return (
    <div className='row'>
      <div className='col s12 m4 l3'>{/* <FavoritesSideBar /> */}</div>
      <div className='col s12 m8 l9'>
        <Filter />
        <CharacterList />
      </div>
    </div>
  );
};
