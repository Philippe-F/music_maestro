import * as APIUtil from "../util/user_api_util";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events: events
});

export const receiveUserData = data => ({
  type: RECEIVE_ALL_DATA,
  data: data
});

export const fetchEvents = () => dispatch => (
  APIUtil.getEvents()
    .then(events => dispatch(receiveAllEvents(events)))
    .catch(err => console.log(err))
);

export const fetchUserFavorites = userId => dispatch => (
  APIUtil.getUserFavorites(userId)
    .then(events => dispatch(receiveUserData(events)))
    .catch(err => console.log(err))
);

export const fetchUserArtists = userId => dispatch => (
  APIUtil.getUserArtists(userId)
    .then(artists => dispatch(receiveUserData(artists)))
    .catch(err => console.log(err))
);

export const fetchUserVenues = userId => dispatch => (
  APIUtil.getUserVenues(userId)
    .then(venues => dispatch(receiveUserData(venues)))
    .catch(err => console.log(err))
);