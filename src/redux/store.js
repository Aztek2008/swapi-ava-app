import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
// import monitorReducerEnhancer from '../services/monitorReducer';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancers = compose(
  applyMiddleware(...middlewares)
  // monitorReducerEnhancer
);

export const store = createStore(
  rootReducer,
  composeWithDevTools(composeEnhancers)
);
