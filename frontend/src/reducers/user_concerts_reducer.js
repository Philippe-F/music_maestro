import { RECEIVE_SEARCHED_CONCERTS } from '../actions/search_actions';


export default (state = {}, action) =>  {
  switch (action.type) {
    case RECEIVE_SEARCHED_CONCERTS:
      return Object.assign({}, state, action.concerts)
    default:
      return state;
  }
}