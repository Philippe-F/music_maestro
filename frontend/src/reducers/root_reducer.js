import { combineReducers } from "redux";
import session from "./session_reducer";
import errorsReducer from "./errors_reducer"
import usersReducer from "./user_reducer";
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
  session: session,
  errors: errorsReducer,
  user: usersReducer,
  ui: uiReducer
});

export default RootReducer;
