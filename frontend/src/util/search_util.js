import axios from 'axios';

export const searchConcerts = search => {
  
  return axios.get(`/search`, { params: {search} });
};