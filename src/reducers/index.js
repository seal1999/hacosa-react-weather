import { combineReducers } from 'redux';
import navigationReducer from './navigation';
import weatherReducer from './weather';
import authReducer from './auth';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  weather: weatherReducer,
  auth: authReducer,
});

export default rootReducer;
