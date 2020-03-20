import * as SearchAPIUtils from '../util/search_util';

export const RECEIVE_SEARCHED_CONCERTS = "RECEIVE_SEARCHED_CONCERTS"

const receiveSearchedConcerts = (concerts) => ({
  type: RECEIVE_SEARCHED_CONCERTS,
  concerts
})

export const searchConcerts = (search) => dispatch => SearchAPIUtils.searchConcerts(search)
  .then((concerts) => dispatch(receiveSearchedConcerts(concerts)));