import { 
  RECEIVE_ALL_EVENTS, 
  RECEIVE_USER_VENUES,
  RECEIVE_USER_ARTISTS,
  RECEIVE_USER_ARTIST,
  RECEIVE_USER_EVENTS,
  RECEIVE_USER_FAVORITES } from "../actions/user_actions";
import { RECEIVE_USER, UPDATE_USER_FAVORITES } from '../actions/fav_and_follow_actions';



  export default function( state = {}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
      case RECEIVE_USER:
        return Object.assign({}, newState, { user: action.user })
      case RECEIVE_ALL_EVENTS:
        return Object.assign({}, newState, { events: action.events });
      case RECEIVE_USER_VENUES:
        return Object.assign({}, newState, { userVenues: action.data});
      case RECEIVE_USER_ARTISTS:
        return Object.assign({}, newState, { userArtists: action.data});
      case RECEIVE_USER_ARTIST:
        return Object.assign({}, newState, { userArtists: action.data});
      case RECEIVE_USER_FAVORITES:
        return Object.assign({}, newState, { userFavorites: action.data.data});
      case RECEIVE_USER_EVENTS: 
        return Object.assign({}, newState, { userEvents: action.events})
      case UPDATE_USER_FAVORITES: 
        // if (newState[userFavorites]) {
        //   newState[userFavorites].push(action.data)
        //   return newState
        // } else {
          return Object.assign({}, newState, { userFavorites: action.data.data.favorites.events })
        // }
      default:
        return state;
    }
  };
