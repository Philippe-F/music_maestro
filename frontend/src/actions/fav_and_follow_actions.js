import * as FollowAPIUtil from '../util/follows_util';
import * as FavAPIUtil from "../util/favorites_util";

export const RECEIVE_USER = "RECEIVE_USER"
export const UPDATE_USER_FAVORITES = "UPDATE_USER_FAVORITES"
export const UPDATE_USER_FOLLOWS = "UPDATE_USER_FOLLOWS"

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const updateUserFavorites = data => ({
  type: UPDATE_USER_FAVORITES,
  data
})

const updateUserFollows = data => ({
  type: UPDATE_USER_FOLLOWS,
  data
})


export const followVenue = (userId, venueId) => dispatch => FollowAPIUtil.followVenue(userId, venueId)
  .then((user) => dispatch(receiveUser(user)));

export const unfollowVenue = (userId, venueId) => dispatch => FollowAPIUtil.unfollowVenue(userId, venueId)
  .then((user) => dispatch(receiveUser(user)));

// export const followArtist = (userId, artistId) => dispatch => FollowAPIUtil.followArtist(userId, artistId)
//   .then((user) => dispatch(receiveUser(user)));

// export const unfollowArtist = (userId, artistId) => dispatch => FollowAPIUtil.unfollowArtist(userId, artistId)
//   .then((user) => dispatch(receiveUser(user)));

export const unfollowArtist = (userId, artistId) => dispatch => FollowAPIUtil.unfollowArtist(userId, artistId)
  .then((user => dispatch(updateUserFollows(user))));

export const followArtist = (userId, artistId) => dispatch => FollowAPIUtil.followArtist(userId, artistId)
  .then((user => dispatch(updateUserFollows(user))));

////////////////////////

export const favoriteEvent = (userId, eventId) => dispatch => FavAPIUtil.favoriteEvent(userId, eventId)
  .then((user => dispatch(updateUserFavorites(user))));

 export const unfavoriteEvent = (userId, eventId) => dispatch => FavAPIUtil.unfavoriteEvent(userId, eventId)
  .then((user => dispatch(updateUserFavorites(user))));

