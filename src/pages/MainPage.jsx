// import React, { lazy, Suspense } from 'react';

import { CharacterList } from '../components/CharacterList/CharacterList';
// import { FavoritesSideBar } from '../components/FavoritesSideBar';
import { Filter } from '../components/Filter/Filter';
// const CharacterList = lazy(() =>
//   import('../components/CharacterList/CharacterList')
// );
// const renderLoader = () => <p>Loading</p>;

export const MainPage = () => {
  return (
    <div className='row'>
      <div className='col s12 m4 l3'>{/* <FavoritesSideBar /> */}</div>
      <div className='col s12 m8 l9'>
        <Filter />
        {/* <Suspense fallback={renderLoader()}> */}
        <CharacterList />
        {/* </Suspense> */}
      </div>
    </div>
  );
};
