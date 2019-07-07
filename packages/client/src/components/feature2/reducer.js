import { createReducerSetter, createReducer } from '../../redux';
import { addReducer } from '../../reducer';
import { NAME, actionSetAddress1 } from './constants';

import { setAddress1, setAddress2 } from './actions';

export const initialState = {
  address1: '20 light st.',
  address2: 'Kingsville, CA',
};

const reducer = createReducer(initialState, {
  [setAddress1]: createReducerSetter('address1'),
  [setAddress2]: createReducerSetter('address2'),
});

addReducer({ name: NAME, reducer });

export default reducer;
