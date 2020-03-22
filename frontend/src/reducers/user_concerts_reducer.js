import {
  RECEIVE_SEARCHED_CONCERTS,
  CLEAR_SEARCH_RESULTS
} from "../actions/search_actions";
 

export default (state = {}, action) =>  {
  switch (action.type) {
    case RECEIVE_SEARCHED_CONCERTS:
      return Object.assign({}, state, action.concerts);
    case CLEAR_SEARCH_RESULTS:
      return {};
    default:
      return state;
  }
}