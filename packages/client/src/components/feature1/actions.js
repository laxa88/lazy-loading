import { createSetterActions, createAction } from '../../redux';

import { NAME } from './constants';
import { actions } from '../feature2';

export const [setName, setEmail, setFeature2Visible] = createSetterActions(
  NAME,
  ['name', 'email', 'feature2Visible']
);

export const fetchUser = createAction(
  NAME,
  'FETCH_USER',
  () => async dispatch => {
    const data = await fetch('http://localhost:3000/user');
    const { name, email } = await data.json();

    dispatch(setName(name));
    dispatch(setEmail(email));
    dispatch(setFeature2Visible(true));
  }
);

export const loadFeature2 = createAction(
  NAME,
  'LOAD_FEATURE2',
  () => async dispatch => {
    const lib = await actions();
    console.log('###', lib);
  }
);
