import { createReducerSetter, createReducer } from '../../redux';

import * as actions from './actions';

export const initialState = {
  address1: '20 light st.',
  address2: 'Kingsville, CA',
};

export default createReducer(initialState, {
  [actions.setAddress1]: createReducerSetter('address1'),
  [actions.setAddress2]: createReducerSetter('address2'),
});
