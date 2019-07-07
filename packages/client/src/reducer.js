import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import * as feature1 from './components/feature1';

const baseReducer = {
  [feature1.NAME]: feature1.reducer,
};

const asyncReducers = {};

const store = createStore(
  combineReducers(baseReducer),
  composeWithDevTools(applyMiddleware(thunk))
);

export const addReducer = ({ name, reducer }) => {
  if (asyncReducers[name]) {
    console.warn('Replacing existing reducer!');
  }

  asyncReducers[name] = reducer;

  store.replaceReducer(
    combineReducers({
      ...baseReducer,
      ...asyncReducers,
    })
  );
};

export default store;
