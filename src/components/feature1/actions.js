import { createSetterActions } from '../../redux';

import { NAME } from './constants';

export const [setName, setEmail] = createSetterActions(NAME, ['name', 'email']);