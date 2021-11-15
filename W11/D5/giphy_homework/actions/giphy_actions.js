import * as APIUtil from '../util/api_util';

export const receiveSearchGiphys = giphys => {
  return {
    type: RECEIVE_SEARCH_GIPHYS,
    giphys
  };
};

export const fetchSearchGiphys = searchTerm => {
  return dispatch => {
    APIUtil.fetchSearchGiphys(searchTerm)
      .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  };
};

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const FETCH_SEARCH_GIPHYS = 'FETCH_SEARCH_GIPHYS';
