import { createSetterActions, createAction } from '../../redux';

import { NAME } from './constants';

export const [setName, setEmail] = createSetterActions(NAME, ['name', 'email']);

export const fetchUser = createAction(`${NAME}/FETCH_USER`, () => dispatch => {
  fetch('http://localhost:3000/user')
    .then(data => data.json())
    .then(json => {
      const { name, email } = json;
      dispatch(setName(name));
      dispatch(setEmail(email));
    });
});
