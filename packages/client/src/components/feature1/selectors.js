import { createSelectors } from '../../redux';

import { NAME } from './constants';

export const [getName, getEmail, isFeature2Visible] = createSelectors(NAME, [
  'name',
  'email',
  'feature2Visible',
]);
