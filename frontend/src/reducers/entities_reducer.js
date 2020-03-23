import { combineReducers } from "redux";

import concertsReducer from "./concerts_reducer";

export default combineReducers({
  concerts: concertsReducer,
});