import axios from 'axios';


export const followVenue = (userId, venueId) => {
  return axios.post(`/api/users/${userId}/venues/${venueId}/follow`)
}

export const unfollowVenue = (userId, venueId) => {
  return axios.delete(`/api/users/${userId}/venues/${venueId}/follow`);
};

export const followArtist = (userId, artistId) => {
  return axios.post(`/api/users/${userId}/artists/${artistId}/follow`);
};

export const unfollowArtist = (userId, artistId) => {
  return axios.delete(`/api/users/${userId}/artists/${artistId}/follow`);
};