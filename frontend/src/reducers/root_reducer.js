import { combineReducers } from "redux";
import session from "./session_reducer";
import errorsReducer from "./errors_reducer"
import userReducer from "./users_reducer";

const RootReducer = combineReducers({
  session: session,
  errors: errorsReducer, 
  user: userReducer
});

export default RootReducer;
