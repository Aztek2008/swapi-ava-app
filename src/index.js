import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.css';
import { store } from './reduxRTK/index';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(
  <Provider store={store}>{app}</Provider>,
  document.getElementById('root')
);
