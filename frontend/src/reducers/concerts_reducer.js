import { combineReducers } from "redux";

import userConcertsReducer from './user_concerts_reducer'

export default combineReducers({
  userConcerts: userConcertsReducer
});
