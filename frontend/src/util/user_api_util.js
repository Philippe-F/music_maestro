import axios from "axios";

export const receiveAllEvents = () => {
  return axios.get("/events");
};

export const receiveUserFavorites = userId => {
  return axios.get(`/api/users/${userId}/my_favorites`);
};

/////////////////
export const receiveUserFollows = userId => {
  return axios.get(`/api/users/${userId}/my_follows`);
};
// Double check the db for my_follows column 
////////////////

export const receiveUserArtists = userId => {
  return axios.get(`/api/users/${userId}/my_artists`);
};

export const showUserArtist = (userId, artistId) => {
  return axios.get(`/api/users/${userId}/my_artists/${artistId}`);
};

export const receiveUserVenues = userId => {
  return axios.get(`/api/users/${userId}/my_venues`);
};

export const receiveUserEvents = userId => (
  axios.get(`api/users/${userId}/events`)
)