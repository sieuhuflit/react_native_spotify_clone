import { AsyncStorage } from 'react-native';
import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE
} from './types';
import { authApi } from '../../api';
import { setHeaderToken } from '../../api/api';

export const getTokenRequest = () => ({ type: GET_TOKEN_REQUEST });
export const getTokenSuccess = payload => ({
  type: GET_TOKEN_SUCCESS,
  payload
});
export const getTokenFailure = () => ({ type: GET_TOKEN_FAILURE });

export const getToken = callback => async dispatch => {
  dispatch(getTokenRequest());
  try {
    const response = await authApi.getToken();

    const {
      data: { access_token: accessToken = '' }
    } = response;
    dispatch(getTokenSuccess(accessToken));
    AsyncStorage.setItem('@token', accessToken);
    setHeaderToken(accessToken);
    callback();
  } catch (error) {
    dispatch(getTokenFailure());
  }
};
