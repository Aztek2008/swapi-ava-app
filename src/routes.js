import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { DetailedCharacterPage } from './pages/DetailedCharacterPage';
import { MainPage } from './pages/MainPage';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path='/people' exact>
        <MainPage />
      </Route>
      <Route path='/details/:id' exact>
        <DetailedCharacterPage />
      </Route>
      <Redirect to='/people' />
    </Switch>
  );
};
