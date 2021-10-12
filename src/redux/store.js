import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  rootReducer,
  composeWithDevTools(composeEnhancers)
);
