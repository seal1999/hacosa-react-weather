import { combineReducers } from 'redux';
import navigationReducer from './navigation';
import weatherReducer from './weather';
import apiStatusReducer from './apiStatus';
import firebaseReducer from './firebase';

const rootReducer = combineReducers({
  navigationReducer,
  weatherReducer,
  apiStatusReducer,
  firebaseReducer,
});

export default rootReducer;
