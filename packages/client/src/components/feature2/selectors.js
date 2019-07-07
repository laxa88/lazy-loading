import { createSelectors } from '../../redux';

import { NAME } from './constants';

export const [getAddress1, getAddress2] = createSelectors(NAME, [
  'address1',
  'address2',
]);
