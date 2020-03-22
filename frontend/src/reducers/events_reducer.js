import {
  RECEIVE_ALL_EVENTS,
} from "../actions/user_actions";



export default function (state = {}, action) {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return Object.assign({}, newState, action.events);
    default:
      return state;
  }
};