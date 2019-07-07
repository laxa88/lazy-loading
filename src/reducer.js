import { combineReducers, createStore } from "redux";

import * as feature1 from "./components/feature1";
import * as feature2 from "./components/feature2";

const rootReducer = combineReducers({
  [feature1.NAME]: feature1.reducer,
  [feature2.NAME]: feature2.reducer
});

export default createStore(rootReducer);
