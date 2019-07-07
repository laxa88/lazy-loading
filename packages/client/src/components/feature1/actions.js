import { createSetterActions, createAction } from '../../redux';

import { NAME } from './constants';

export const [setName, setEmail] = createSetterActions(NAME, ['name', 'email']);

export const fetchUser = createAction(
  `${NAME}/FETCH_USER`,
  () => async dispatch => {
    const data = await fetch('http://localhost:3000/user');
    const { name, email } = await data.json();
    dispatch(setName(name));
    dispatch(setEmail(email));
  }
);
