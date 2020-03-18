import reducer from './reducer';
import * as actions from './actions';

describe('Home reducer', () => {
  const initialState = {
    albumDetail: null,
    listAlbums: []
  };

  it('initialize correctly', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('fetch recommendation request', () => {
    expect(reducer(initialState, actions.fetchRecommendationRequest())).toEqual(
      {
        ...initialState
      }
    );
  });
  it('fetch recommendation success', () => {
    const listAlbums = [];
    expect(
      reducer(initialState, actions.fetchRecommendationSuccess(listAlbums))
    ).toEqual({
      ...initialState,
      listAlbums
    });
  });
  it('fetch recommendation failure', () => {
    expect(reducer(initialState, actions.fetchRecommendationFailure())).toEqual(
      {
        ...initialState,
        listAlbums: []
      }
    );
  });

  it('fetch album detail request', () => {
    expect(reducer(initialState, actions.fetchAlbumRequest())).toEqual({
      ...initialState
    });
  });
  it('fetch album detail success', () => {
    const albumDetail = {
      id: 1,
      name: 'test'
    };
    expect(
      reducer(initialState, actions.fetchAlbumSuccess(albumDetail))
    ).toEqual({
      ...initialState,
      albumDetail
    });
  });
  it('fetch album failure', () => {
    expect(reducer(initialState, actions.fetchAlbumFailure())).toEqual({
      ...initialState,
      albumDetail: null
    });
  });
});
