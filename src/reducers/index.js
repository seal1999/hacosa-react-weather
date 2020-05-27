import { combineReducers } from 'redux';
import navigationReducer from './navigation';
import weatherReducer from './weather';
import apiStatusReducer from './apiStatus';
import authReducer from './firebase';

const rootReducer = combineReducers({
  navigationReducer,
  weatherReducer,
  apiStatusReducer,
  authReducer,
});

export default rootReducer;
