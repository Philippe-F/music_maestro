import axios from "axios";

export const favoriteEvent = (userId, eventId) => {
  return axios.post(`/api/users/${userId}/events/${eventId}/favorite`);
};

export const unfavoriteEvent = (userId, eventId) => {
  return axios.delete(`/api/users/${userId}/events/${eventId}/favorite`);
};
