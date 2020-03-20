import { 
  RECEIVE_ALL_EVENTS, 
  RECEIVE_USER_VENUES,
  RECEIVE_USER_ARTISTS,
  RECEIVE_USER_FAVORITES } from "../actions/user_actions";

  export default function( state = {}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
      case RECEIVE_ALL_EVENTS:
        return Object.assign({}, newState, action.events);
      case RECEIVE_USER_VENUES:
        return Object.assign({}, newState, action.data);
      case RECEIVE_USER_ARTISTS:
        return Object.assign({}, newState, action.data);
      case RECEIVE_USER_FAVORITES:
        return Object.assign({}, newState, action.data); 
      default:
        return state;
    }
  };
