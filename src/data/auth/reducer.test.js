import _ from 'lodash';
import reducer from './reducer';
import * as actions from './actions';

describe('Auth reducer', () => {
  const initialState = {
    token: null,
    isLoading: false
  };

  it('initialize correctly', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('get token request', () => {
    expect(reducer(initialState, actions.getTokenRequest())).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it('get token success', () => {
    const token = 'token';
    expect(reducer(initialState, actions.getTokenSuccess(token))).toEqual({
      ...initialState,
      isLoading: false,
      token
    });
  });
  it('get token failure', () => {
    expect(reducer(initialState, actions.getTokenFailure())).toEqual({
      ...initialState,
      isLoading: false,
      token: null
    });
  });
});
