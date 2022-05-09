import { combineReducers } from "redux";

import counterReducer from "./AddButton/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
