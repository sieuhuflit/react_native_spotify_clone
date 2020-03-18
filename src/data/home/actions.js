import {
  FETCH_RECOMMENDATION_REQUEST,
  FETCH_RECOMMENDATION_SUCCESS,
  FETCH_RECOMMENDATION_FAILURE,
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
  RESET_ALBUM_DETAIL
} from './types';
import { recommendationApi, albumApi } from '../../api';

export const fetchRecommendationRequest = () => ({
  type: FETCH_RECOMMENDATION_REQUEST
});
export const fetchRecommendationSuccess = payload => ({
  type: FETCH_RECOMMENDATION_SUCCESS,
  payload
});
export const fetchRecommendationFailure = () => ({
  type: FETCH_RECOMMENDATION_FAILURE
});

export const fetchRecommendation = () => async dispatch => {
  dispatch(fetchRecommendationRequest());
  try {
    const response = await recommendationApi.getRecommendation();
    const {
      data: { tracks = [] }
    } = response;
    dispatch(fetchRecommendationSuccess(tracks));
  } catch (error) {
    dispatch(fetchRecommendationFailure());
  }
};

export const fetchAlbumRequest = () => ({
  type: FETCH_ALBUM_REQUEST
});
export const fetchAlbumSuccess = payload => ({
  type: FETCH_ALBUM_SUCCESS,
  payload
});

export const fetchAlbumFailure = () => ({
  type: FETCH_ALBUM_FAILURE
});

export const fetchAlbum = albumId => async dispatch => {
  dispatch(fetchAlbumRequest());
  try {
    const response = await albumApi.getAlbum(albumId);
    const { data } = response;
    dispatch(fetchAlbumSuccess(data));
  } catch (error) {
    dispatch(fetchAlbumFailure());
  }
};

export const resetAlbumDetail = () => ({
  type: RESET_ALBUM_DETAIL
});
