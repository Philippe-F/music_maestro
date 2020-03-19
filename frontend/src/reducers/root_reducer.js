import { combineReducers } from "redux";
import session from "./session_reducer";
import errorsReducer from "./errors_reducer"
<<<<<<< HEAD
import userReducer from "./users_reducer";
import ui from './ui_reducer'

const RootReducer = combineReducers({
  session: session,
  errors: errorsReducer, 
  user: userReducer,
  ui
});

export default RootReducer;
