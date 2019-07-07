import { createReducerSetter, createReducer } from '../../redux';

import * as actions from './actions';

export const initialState = {
  name: 'john doe',
  email: 'example@email.com',
};

export default createReducer(initialState, {
  [actions.setName]: createReducerSetter('name'),
  [actions.setEmail]: createReducerSetter('email'),
});
