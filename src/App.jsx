import { BrowserRouter as Router } from 'react-router-dom';
import { BreadCrumbBar } from './components/BreadCrumbBar';
import { CharacterContextProvider } from './context';
import { useRoutes } from './routes';

import 'materialize-css';

export const App = () => {
  const routes = useRoutes();
  return (
    <CharacterContextProvider>
      <Router>
        <div className='container'>
          <BreadCrumbBar />
          {routes}
        </div>
      </Router>
    </CharacterContextProvider>
  );
};
