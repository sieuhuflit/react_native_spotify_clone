import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE
} from './types';

const initialState = {
  token: null,
  isLoading: false
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return { ...state, isLoading: true };
    case GET_TOKEN_SUCCESS:
      return { ...state, isLoading: false, token: action.payload };
    case GET_TOKEN_FAILURE:
      return { ...state, isLoading: false, token: null };
    default:
      return state;
  }
};
export default homeReducer;
