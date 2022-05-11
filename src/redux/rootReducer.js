import { combineReducers } from "redux";

import reducer from "./AddButton/reducer";

const rootReducer = combineReducers({
  counter: reducer,
});

export default rootReducer;
