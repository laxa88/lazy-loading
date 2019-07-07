import React from 'react';
import Loadable from 'react-loadable';

export const actions = () =>
  import(/* webpackChunkName: "actions" */ './actions');

export const constants = () =>
  import(/* webpackChunkName: "constants" */ './constants');

export const selectors = () =>
  import(/* webpackChunkName: "selectors" */ './selectors');

export const reducer = () =>
  import(/* webpackChunkName: "reducer" */ './reducer');

export const Feature2 = Loadable({
  loader: () => import('./Feature2'),
  loading: () => <div>Loading</div>,
});
