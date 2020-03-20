import { combineReducers } from "redux";
import session from "./session_reducer";
import errorsReducer from "./errors_reducer"
import ui from './ui_reducer'
import entitiesReducer from "./entities_reducer";

const RootReducer = combineReducers({
  session,
  errors: errorsReducer,
  entities: entitiesReducer, 
  ui
});

export default RootReducer;
