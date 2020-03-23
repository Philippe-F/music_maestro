import * as APIUtil from "../util/user_api_util";
export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_USER_FAVORITES = "RECEIVE_USER_FAVORITES";
export const RECEIVE_USER_ARTISTS = "RECEIVE_USER_ARTISTS";
export const RECEIVE_USER_VENUES = "RECEIVE_USER_VENUES";
export const RECEIVE_USER_EVENTS = "RECEIVE_USER_EVENTS"

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events: events
});

export const receiveUserFavorites = data => ({
  type: RECEIVE_USER_FAVORITES,
  data: data
});

export const receiveUserArtists = data => ({
  type: RECEIVE_USER_ARTISTS,
  data: data
});

export const receiveUserVenues = data => ({
  type: RECEIVE_USER_VENUES,
  data: data
});

const receiveUserEvents = events => ({
  type: RECEIVE_USER_EVENTS,
  events
})

export const fetchEvents = () => dispatch => (
  APIUtil.receiveAllEvents()
    .then(events => dispatch(receiveAllEvents(events)))
    .catch(err => console.log(err))
);

export const fetchUserFavorites = userId => dispatch => (
  APIUtil.receiveUserFavorites(userId)
    .then(events => dispatch(receiveUserFavorites(events)))
    .catch(err => console.log(err))
);

export const fetchUserArtists = userId => dispatch => (
  APIUtil.receiveUserArtists(userId)
    .then(artists => dispatch(receiveUserArtists(artists)))
    .catch(err => console.log(err))
);

export const fetchUserVenues = userId => dispatch => (
  APIUtil.receiveUserVenues(userId)
    .then(venues => dispatch(receiveUserVenues(venues)))
    .catch(err => console.log(err))
);

export const fetchUserEvents = userId => dispatch => (
  APIUtil.receiveUserEvents(userId)
    .then(events => dispatch(receiveUserEvents(events)))
    .catch(err => console.log(err))
)