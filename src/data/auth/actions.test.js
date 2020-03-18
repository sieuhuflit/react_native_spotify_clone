import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import querystring from 'querystring';
import * as actions from './actions';
import * as types from './types';

const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  it('should getToken work correctly', () => {
    const response = {
      access_token: 'access_token'
    };
    mock
      .onPost(
        'api/token',
        querystring.stringify({ grant_type: 'client_credentials' })
      )
      .reply(200, response);
    const expectedGetTokenRequest = {
      type: types.GET_TOKEN_REQUEST
    };
    const expectedGetTokenSuccess = {
      type: types.GET_TOKEN_SUCCESS,
      payload: 'access_token'
    };
    const expectedActions = [expectedGetTokenRequest, expectedGetTokenSuccess];
    const store = mockStore();
    const callback = jest.fn();
    return store.dispatch(actions.getToken(callback)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(callback).toBeCalledTimes(1);
    });
  });

  it('should getToken failure', () => {
    mock
      .onPost(
        'api/token',
        querystring.stringify({ grant_type: 'client_credentials' })
      )
      .reply(400, 'Not found');
    const expectedGetTokenRequest = {
      type: types.GET_TOKEN_REQUEST
    };
    const expectedGetTokenFailure = {
      type: types.GET_TOKEN_FAILURE
    };
    const expectedActions = [expectedGetTokenRequest, expectedGetTokenFailure];
    const store = mockStore();
    const callback = jest.fn();
    return store.dispatch(actions.getToken(callback)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(callback).toBeCalledTimes(0);
    });
  });
});
