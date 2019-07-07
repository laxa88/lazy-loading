import { createReducerSetter, createReducer } from '../../redux';

import * as actions from './actions';

export const initialState = {
  name: 'john doe',
  email: 'example@email.com',
  feature2Visible: false,
};

export default createReducer(initialState, {
  [actions.setName]: createReducerSetter('name'),
  [actions.setEmail]: createReducerSetter('email'),
  [actions.setFeature2Visible]: createReducerSetter('feature2Visible'),
});
