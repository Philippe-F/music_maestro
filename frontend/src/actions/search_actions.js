import * as SearchAPIUtils from '../util/search_util';

export const RECEIVE_SEARCHED_CONCERTS = "RECEIVE_SEARCHED_CONCERTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

const receiveSearchedConcerts = (concerts) => ({
  type: RECEIVE_SEARCHED_CONCERTS,
  concerts
})

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS
})

export const searchConcerts = (search) => dispatch => SearchAPIUtils.searchConcerts(search)
  .then((concerts) => dispatch(receiveSearchedConcerts(concerts)));