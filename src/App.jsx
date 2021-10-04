import { BrowserRouter as Router } from 'react-router-dom';
import { BreadCrumbBar } from './components/BreadCrumbBar';
import { useRoutes } from './routes';

import 'materialize-css';

export const App = () => {
  const routes = useRoutes();
  return (
    <Router>
      <div className='container'>
        <BreadCrumbBar />
        {routes}
      </div>
    </Router>
  );
};
