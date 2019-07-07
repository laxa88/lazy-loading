import { createSelectors } from '../../redux';

import { NAME } from './constants';

export const [getName, getEmail] = createSelectors(NAME, ['name', 'email']);
