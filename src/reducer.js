import { combineReducers } from 'redux';

import * as feature1 from './components/feature1';
import * as feature2 from './components/feature2';

export default combineReducers({
  [feature1.NAME]: feature1.reducer,
  [feature2.NAME]: feature2.reducer,
});
