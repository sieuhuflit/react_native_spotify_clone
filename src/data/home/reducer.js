import {
  FETCH_RECOMMENDATION_REQUEST,
  FETCH_RECOMMENDATION_SUCCESS,
  FETCH_RECOMMENDATION_FAILURE,
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
  RESET_ALBUM_DETAIL
} from './types';

const initialState = {
  albumDetail: null,
  listAlbums: []
};

const homeReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_RECOMMENDATION_REQUEST:
      return { ...state };
    case FETCH_RECOMMENDATION_SUCCESS:
      return { ...state, listAlbums: payload };
    case FETCH_RECOMMENDATION_FAILURE:
      return { ...state, listAlbums: [] };
    case FETCH_ALBUM_REQUEST:
      return { ...state };
    case FETCH_ALBUM_SUCCESS:
      return { ...state, albumDetail: payload };
    case FETCH_ALBUM_FAILURE:
      return { ...state };
    case RESET_ALBUM_DETAIL:
      return { ...state, albumDetail: null };
    default:
      return state;
  }
};

export default homeReducer;
