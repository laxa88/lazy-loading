import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import store from './reducer';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
