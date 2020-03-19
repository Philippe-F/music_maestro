import axios from "axios";

export const getEvents = () => {
  return axios.get("/api/events");
};

export const getUserFavorites = userId => {
  return axios.get(`/api/users/${userId}/my_favorites`);
};

export const getUserArtists = userId => {
  return axios.get(`/api/users/${userId}/my_artists`);
};

export const getUserVenues = userId => {
  return axios.get(`/api/users/${userId}/my_venues`);
};