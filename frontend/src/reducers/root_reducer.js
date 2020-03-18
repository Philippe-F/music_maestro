import { combineReducers } from "redux";
import session from "./session_reducer";
import errorsReducer from "./errors_reducer"
import ui from './ui_reducer'

const RootReducer = combineReducers({
  session,
  errors: errorsReducer,
  ui
});

export default RootReducer;
