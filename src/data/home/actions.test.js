import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './actions';
import * as types from './types';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home actions', () => {
  it('should fetch recommendation work correctly', () => {
    const response = {
      tracks: []
    };
    mock
      .onGet(
        'v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA'
      )
      .reply(200, response);
    const expectedFetchRecommendtaionRequest = {
      type: types.FETCH_RECOMMENDATION_REQUEST
    };
    const expectedFetchRecommendationSuccess = {
      type: types.FETCH_RECOMMENDATION_SUCCESS,
      payload: response.tracks
    };
    const expectedActions = [
      expectedFetchRecommendtaionRequest,
      expectedFetchRecommendationSuccess
    ];
    const store = mockStore();
    const callback = jest.fn();
    return store.dispatch(actions.fetchRecommendation(callback)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fetch recommendation failure', () => {
    mock
      .onGet(
        'v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA'
      )
      .reply(404, 'Not Found');
    const expectedFetchRecommendationRequest = {
      type: types.FETCH_RECOMMENDATION_REQUEST
    };
    const expectedFetchRecommendationFailure = {
      type: types.FETCH_RECOMMENDATION_FAILURE
    };
    const callback = jest.fn();
    const expectedActions = [
      expectedFetchRecommendationRequest,
      expectedFetchRecommendationFailure
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchRecommendation(callback)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(callback).toBeCalledTimes(0);
    });
  });

  it('should fetch album success', () => {
    const albumId = 1;
    const response = {
      id: 1,
      albumName: 'Hello'
    };
    mock.onGet(`/v1/albums/${albumId}`).reply(200, response);
    const expectedFetchAlbumRequest = {
      type: types.FETCH_ALBUM_REQUEST
    };
    const expectedFetchAlbumSuccess = {
      type: types.FETCH_ALBUM_SUCCESS,
      payload: response
    };
    const expectedActions = [
      expectedFetchAlbumRequest,
      expectedFetchAlbumSuccess
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchAlbum(albumId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fetch album failure', () => {
    const albumId = 1;
    mock.onGet(`/v1/albums/${albumId}`).reply(404, 'Not found');
    const expectedFetchAlbumRequest = {
      type: types.FETCH_ALBUM_REQUEST
    };
    const expectedFetchAlbumFailure = {
      type: types.FETCH_ALBUM_FAILURE
    };
    const expectedActions = [
      expectedFetchAlbumRequest,
      expectedFetchAlbumFailure
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchAlbum(albumId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
