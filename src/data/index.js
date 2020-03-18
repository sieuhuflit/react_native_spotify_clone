import { combineReducers } from 'redux';

import homeReducer from './home/reducer';

const reducer = combineReducers({
  home: homeReducer
});

export default reducer;
