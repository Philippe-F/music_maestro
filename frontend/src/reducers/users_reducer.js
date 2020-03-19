import { 
  RECEIVE_ALL_EVENTS, 
  RECEIVE_USER_VENUES,
  RECEIVE_USER_ARTISTS,
  RECEIVE_USER_FAVORITES } from "../actions/user_actions";

  const UsersReducer = ( state = {}, all = {},
     user = { favorites: {}, artists: {}, venues: {} }, action) => {
    Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ALL_EVENTS:
        all = action.events;
        return all; 
      case RECEIVE_USER_VENUES:
        user.venues = action.data;
        return user.venues;
      case RECEIVE_USER_ARTISTS:
        user.artists = action.data;
        return user.artists;
      case RECEIVE_USER_FAVORITES:
        user.favorites = action.data;
        return user.favorites; 
      default:
        return state;
    }
  };

  export default UsersReducer; 