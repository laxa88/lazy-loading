import { createSetterActions } from '../../redux';

import { NAME } from './constants';

export const [setAddress1, setAddress2] = createSetterActions(NAME, [
  'address1',
  'address2',
]);
